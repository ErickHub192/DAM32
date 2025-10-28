const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async (page = 1, limit = 10) => {  
    try {
        const url = `${API_URL}?_page=${page}&_limit=${limit}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();  
        
        return data;

    } catch (error) {
        console.error('Error obteniendo posts:', error);
        throw error;
    }
};

export const getPostById = async (id) => {  
  try {  
    const url = `${API_URL}/${id}`;  
    
    const response = await fetch(url);  
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json(); 
    
    return data;
    
  } catch (error) {
    console.error('Error obteniendo post:', error);
    throw error;
  }
};

export const createPost = async (post) =>{
    try{
        const url = `${API_URL}`;

        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            } ,
            body: JSON.stringify(post),

        });
        if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json(); 
    
    return data;

    }catch(error){
        console.error('Error obteniendo creando el post:', error);
        throw error;
    
    }
    
}
export const updatePost = async (id, put)=>{
    try{
        const url = `${API_URL}/${id}`;
        const response = await fetch(url,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(put),

        });
        if(!response.ok){
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;

    }catch(error){
        console.error('error actualizando el post', error);
        throw error;
    }
}

export const deletePost = async (id)=>{
    try{
        const url = `${API_URL}/${id}`;
        const response = await fetch(url,{
            method: 'DELETE',
        });
        if (!response.ok){
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data= await response.json();
        return data;

    }catch(error){
        console.error('error borrando el post', error);
        throw error;
    }
}


