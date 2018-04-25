

export function httpPost(url, headers) {
    return new Promise(function (resolve, reject) {        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, false);

        if(headers instanceof Array){
            headers.forEach((element)=>{
                xhr.setRequestHeader(element.key, element.value)
            });
        }

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}

export function httpGet(url) {
    return new Promise(function (resolve, reject) {        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}