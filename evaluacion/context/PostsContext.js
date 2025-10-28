import { createContext, useState, useEffect, useContext } from 'react';
import NetInfo from '@react-native-community/netinfo';
import * as api from '../services/api';
import * as storage from '../services/storage';

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [pendingChanges, setPendingChanges] = useState([]);
  const [isOnline, setIsOnline] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

 useEffect(() => {
    loadPostsFromCache();
  }, []);


  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isOnline && pendingChanges.length > 0) {
      syncPendingChanges();
    }
  }, [isOnline]);

    const loadPostsFromCache = async () => {
    try {
      const cachedPosts = await storage.getStoredPosts();
      const cachedChanges = await storage.getPendingChanges();
      
      setPosts(cachedPosts);
      setPendingChanges(cachedChanges);
      
      console.log('Caché cargado:', cachedPosts.length, 'posts');
      
      if (isOnline) {
        loadPostsFromAPI(1);
      }
    } catch (error) {
      console.error('Error cargando caché:', error);
    }
  };

  const loadPostsFromAPI = async (pageNum) => {
    try {
      setIsSyncing(true);
      
      const newPosts = await api.getPosts(pageNum, 10);
      
      if (pageNum === 1) {
        setPosts(newPosts);
        await storage.savePosts(newPosts);
      } else {
        setPosts(prev => [...prev, ...newPosts]);
      }
      
      await storage.saveLastSync(Date.now().toString());
      
      if (newPosts.length < 10) {
        setHasMore(false);
      }
      
    } catch (error) {
      console.error('Error cargando posts desde API:', error);
    } finally {
      setIsSyncing(false);
    }
  };

  const syncPendingChanges = async () => {
    if (pendingChanges.length === 0) return;
    
    try {
      setIsSyncing(true);
      
      const successfulChanges = [];
      
      for (const change of pendingChanges) {
        try {
          if (change.type === 'create') {
            const result = await api.createPost(change.data);
            
            setPosts(prev => prev.map(p => 
              p.id === change.tempId ? { ...p, id: result.id } : p
            ));
            
          } else if (change.type === 'update') {
            await api.updatePost(change.id, change.data);
            
          } else if (change.type === 'delete') {
            await api.deletePost(change.id);
          }
          
          successfulChanges.push(change);
          
        } catch (error) {
          console.error('Error sincronizando cambio:', error);
        }
      }
      
      const remainingChanges = pendingChanges.filter(
        change => !successfulChanges.includes(change)
      );
      
      setPendingChanges(remainingChanges);
      await storage.savePendingChanges(remainingChanges);
      
      await loadPostsFromAPI(1);
      
    } catch (error) {
      console.error('Error sincronizando:', error);
    } finally {
      setIsSyncing(false);
    }
  };

  const addPost = async (post) => {
    try {
      const tempId = `temp_${Date.now()}`;
      const newPost = {
        ...post,
        id: tempId,
        userId: 1,
      };
      
      setPosts(prev => [newPost, ...prev]);
      
      const change = {
        type: 'create',
        tempId: tempId,
        data: post,
      };
      const updatedPending = [...pendingChanges, change];
      setPendingChanges(updatedPending);
      
      await storage.savePosts([newPost, ...posts]);
      await storage.savePendingChanges(updatedPending);
      
      if (isOnline) {
        await syncPendingChanges();
      }
      
    } catch (error) {
      console.error('Error agregando post:', error);
      setPosts(prev => prev.filter(p => p.id !== tempId));
    }
  };

  const updatePostLocal = async (id, updatedPost) => {
    try {
      const originalPosts = [...posts];
      
      setPosts(prev => prev.map(p => 
        p.id === id ? { ...p, ...updatedPost } : p
      ));
      
      const change = {
        type: 'update',
        id: id,
        data: updatedPost,
      };
      const updatedPending = [...pendingChanges, change];
      setPendingChanges(updatedPending);
      
      
      const updatedPosts = posts.map(p => 
        p.id === id ? { ...p, ...updatedPost } : p
      );
      await storage.savePosts(updatedPosts);
      await storage.savePendingChanges(updatedPending);
      
      if (isOnline) {
        await syncPendingChanges();
      }
      
    } catch (error) {
      console.error('Error actualizando post:', error);
      
      setPosts(originalPosts);
    }
  };

  
  const deletePostLocal = async (id) => {
    try {
      const originalPosts = [...posts];
      
      
      setPosts(prev => prev.filter(p => p.id !== id));
      
      
      const change = {
        type: 'delete',
        id: id,
      };
      const updatedPending = [...pendingChanges, change];
      setPendingChanges(updatedPending);
      
      const updatedPosts = posts.filter(p => p.id !== id);
      await storage.savePosts(updatedPosts);
      await storage.savePendingChanges(updatedPending);
      
      
      if (isOnline) {
        await syncPendingChanges();
      }
      
    } catch (error) {
      console.error('Error eliminando post:', error);
      
      setPosts(originalPosts);
    }
  };

 
  const loadMorePosts = async () => {
    if (!hasMore || isSyncing || !isOnline) return;
    const nextPage = page + 1;
    setPage(nextPage);
    await loadPostsFromAPI(nextPage);
  };

 
  const refreshPosts = async () => {
    setPage(1);
    setHasMore(true);
    await loadPostsFromAPI(1);
  };

  return (
    <PostsContext.Provider value={{
      posts,
      pendingChanges,
      isOnline,
      isSyncing,
      hasMore,
      addPost,
      updatePost: updatePostLocal,
      deletePost: deletePostLocal,
      loadMorePosts,
      refreshPosts,
    }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);