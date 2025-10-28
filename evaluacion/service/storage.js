import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  POSTS: '@posts',
  PENDING: '@pending_changes',
  LAST_SYNC: '@last_sync',
};

export const savePosts = async (posts) =>{
    try{
        await AsyncStorage.setItem(KEYS.POSTS, JSON.stringify(posts));
        return true;


    }catch(error){
        console.error('Error obteniendo posts:', error);
        throw error;

    }

};

export const getStoredPosts = async() =>{
    try{
        const data = await AsyncStorage.getItem(KEYS.POSTS);
    if(data === null){
        return [];
    }
    return JSON.parse(data);

    }catch(error){
        console.error('error cargando los posts',error);
        return [];
    }
}

export const savePendingPost = async(posts)=>{
    try{
        await AsyncStorage.setItem(KEYS.PENDING, JSON.stringify(posts))
        return true;

    }catch(error){
        console.error('Error guardando post pendientes',error);
        throw error;
    }
}
export const getPendingChanges = async() =>{
    try{
        const data = await AsyncStorage.getItem(KEYS.PENDING)
        if (data === null){
            return [];
        }
        return JSON.parse(data);

    }catch(error){
        console.error('Error cargando los cambios pendientes',error)
        return [];
    }
}

export const saveLastSync = async(timestamp)=>{
    try{
        await AsyncStorage.setItem(KEYS.LAST_SYNC, timestamp.toString());
        return true;

    }catch(error){
        console.error('Error guardando ultima sync',error);
        throw error;
    }
}
export const getLastSync = async() =>{
    try{
        const data = await AsyncStorage.getItem(KEYS.LAST_SYNC);
        if (data === null){
            return null;
        }
        return data;

    }catch(error){
        console.error('Error obteniendo ultimo sync')
        return null;
    }
}
