var app6 = new Vue({
    el: '#app-6',
    data: {
      array: '1, 2, 3, 4',
      tar: '1'
    },
    computed: {
        ans: function () {

            let arr = this.array.split(',').map(e => parseInt(e))
            let tar = parseInt(this.tar)
            // form validation
            if ( typeof tar == 'number' && arr.map(each => isNaN(each)).findIndex(each => each == true) == -1 ) {
                return arr.sort((a,b) => a - b)
                .filter((each, i, arr) => {
                    let j = i+1
                    while(j < arr.length && each + tar >= arr[j]) {
                        if (each + tar == arr[j]) return true
                    }
                    return false
                })
                .map( each => `(${each + tar},${each})`)
                .reverse()
                .join()
            }
            return 'invalid input !!!'

        },
    }
  })