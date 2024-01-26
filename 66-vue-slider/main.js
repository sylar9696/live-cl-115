/*

*/

const {
  createApp
} = Vue

createApp({
  data() {
    return {
      currentImage: 0, 
      autoScroll: null,
      movie: {
        images: [
          'https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg', //posizione: 0, n.elemento = .length: 1
          'https://www.themoviedb.org/t/p/w500/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg', //posizione: 1, n.elemento = .length: 2
          'https://www.themoviedb.org/t/p/w500/d4Ja9AMFoWEtTPKFrzQac0ReYb.jpg', //posizione: 2, n.element = .length: 3
          'https://www.themoviedb.org/t/p/w500/p6erCET4fvzQiGz0wgwGFvEIdcb.jpg', //posizione: 3, n.elemento = .length: 4
          'https://www.themoviedb.org/t/p/w500/pWBgjkG8ASvYnrql3tbjMo0d8tk.jpg' //posizione: 4, n.elemento = .length: 5
        ],
        title: 'The Mandalorian',
        category: 'Action',
        length: '120',
      }
    }
  },
  created(){
    this.activeInterval()
  },
  methods: {
    prevImage(){
      this.currentImage--

      if( this.currentImage < 0 ){
        this.currentImage = this.movie.images.length - 1
      }

    },
    nextImage(){
      this.currentImage++

      if( this.currentImage > this.movie.images.length - 1  ){
        this.currentImage = 0
      }

    },
    activeInterval(){
      this.autoScroll = setInterval( () =>{
        this.nextImage()
      }, 2000 )
    },
    stopInterval(){
      clearInterval(this.autoScroll )
    },
    changeImage(index){
      this.currentImage = index
    }
  }
}).mount('#app')



