const myState={
    Arr:[{id:1,name:"shabat" ,albom:"shabesTish",durition:3.5},
    {id:2,name:"lhodot" ,albom:"sesd",durition:3.5},
    {id:3,name:"yevanim" ,albom:"chanuka",durition:6.2},
    {id:4,name:"shabat" ,albom:"shabesTish",durition:1.2}],
    selectedSong:null
}
export const songReduser=(state=myState,action)=>{
    switch(action.type){
        case "SONG_ADDED":
            // action.song.id=Arr[state.Arr.length-1].id+1;
    
    return{
        Arr:[...state.Arr,action.song],
        selectedSong:state.selectedSong
    }
        case "DELETE_SOMG":
            let newArr=state.Arr.filter(item=>item.id!==action.payload)
            let x=!state.selectedSong||state.selectedSong.id==action.payload?null:state.selectedSong;
            return{
                Arr:newArr,
                selectedSong:x
            }
        
    }
    return state
}