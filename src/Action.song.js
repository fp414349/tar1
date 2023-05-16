export const addSong=(song)=>{
    return{
        type:"SONG_ADDED",
        payload:song
    }
}
export const deletSong=(id)=>{
    return{
        type:"DELETE_SOMG",
        payload:id
    }
}
export const selectSong=(song)=>{
    return{
        type:"SONG SELECTED",
        payload:song
    }
}
export const selectSongForEdit=(song)=>{
    return{
        type:"EDIT_SONG_SELECTED",
        payload:song
    }
  
}
export const saveEdit=(id,song)=>{
    return{
        type:"EDIT_SAVE",
        payload:{id,song}
    }
}