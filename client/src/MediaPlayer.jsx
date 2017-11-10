import React from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import FaHeadphones from "react-icons/lib/fa/headphones"
// import options from './options'


const options = {
   //color of the music player theme    [ type `string: 'light' or 'drak'  ` default 'drak' ]
   theme:"drak",
   
   //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
   defaultPosition:{
       top:600,
       left:0
   },

   //play mode text config of the audio player
   playModeText: {
       order: "order",
       orderLoop: "orderLoop",
       singleLoop: "singleLoop",
       shufflePlay: "shufflePlay"
   },

   //audio controller open text  [ type `String | ReactNode` default 'open']
   openText: "OPEN",

   //audio controller close text  [ type `String | ReactNode` default 'close']
   closeText: "CLOSE",

   //audio theme switch checkedText  [ type `String | ReactNode` default '-']
   checkedText:"L",

   //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
   unCheckedText:"D",

   //default play mode of the audio player options 'order' 'orderLoop' 'singleLoop' 'shufflePlay' [ type `String` default 'order' ]
   defaultPlayMode:"order",

   //audio mode        mini | full          [type `String`  default `mini`]  
   mode: "full",

   /**
    * [ type `Boolean` default 'false' ]
    * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
    */
   once: false,

   //Whether you can switch between two modes, full => mini  or mini => full   [type 'Bollean' default 'true']
   toggleMode:false,

   //audio cover is show of the "mini" mode [type `Boolean` default 'true']
   showMiniModeCover:false,

   //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
   drag: true,

   //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
   controllerTitle: <FaHeadphones />,

   //play button display of the audio player panel   [type `Boolean` default `true`]
   showPlay: true,

   //reload button display of the audio player panel   [type `Boolean` default `true`]
   showReload: true,

   //dowload button display of the audio player panel   [type `Boolean` default `true`]
   showDowload: false,

   //loop button display of the audio player panel   [type `Boolean` default `true`]
   showPlayMode: true,

   //theme toogle switch  display of the audio player panel   [type `Boolean` default `true`]
   showThemeSwitch:true,

   //Extensible custom content       [type 'Array' default '[]' ]
   extendsContent:[],

   //Music is downloaded handle
   audioDowload(audioInfo) {
       console.log('audio dowload', audioInfo);
   },

   //audio play handle
   audioPlay(audioInfo) {
       console.log('audio playing', audioInfo);
   },

   //audio pause handle
   audioPause(audioInfo) {
       console.log('audio pause', audioInfo);
   },

   //When the user has moved/jumped to a new location in audio
   autdioSeeked(audioInfo) {
       console.log('audio seeked', audioInfo);
   },
   
   //When the volume has changed  min = 0.0  max = 1.0
   audioVolumeChange(currentVolume){
       console.log('audio volume change',currentVolume);
   },

   //The single song is ended handle
   audioEnded(audioInfo) {
       console.log('audio ended', audioInfo);
   },

   //audio load abort The target event like {...,audioName:xx,audioSrc:xx,playMode:xx}
   audioAbort(e){
       console.log('audio abort',e);
   },

   //audio play progress handle
   audioProgress(audioInfo) {
       console.log('audio progress',audioInfo);
   },

   //audio load faild error handle
   loadAudioError(e) {
       console.log('audio load err', e);
   }
}


const MediaPlayer = (props) => {
  return (
    <ReactJkMusicPlayer {...options} audioLists={props.playlist}  />
  )
}

export default MediaPlayer