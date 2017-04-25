module.exports =
    {
        indexOf: function (array, val) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === val) { 
                    return i;
                 }
            }
            return -1;

        },
        //删除数组里的元素
        remove: function (array, val) {
            for (var index = 0; index < array.length; index++) {
                if (array[index] === val) {
                    //console.log("remove=",index);
                    array.splice(index, 1);

                }
            }
        }

    }