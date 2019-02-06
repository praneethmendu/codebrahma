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
            console.log(typeof tar, tar);
            
            // form validation
            if ( !isNaN(tar) && arr.map(each => isNaN(each)).findIndex(each => each == true) == -1 ) {
                let chk = arr.sort((a,b) => a - b)
                .filter((each, i, arr) => {
                    let j = i+1
                    console.log('ji');
                    
                    while(j < arr.length && each + tar >= arr[j]) {
                        if (each + tar == arr[j]) return true
                        j++
                    }
                    return false
                })
                .map( each => `(${each + tar},${each})`)
                .reverse()
                .join()

                return chk == '' ? 'No Match' : chk
            }
            return 'invalid input !!!'
        },
    }
  })