export class FetchUtils{
    private static fetchBase<T>(url:string, options={}):Promise<T>{
        return new Promise((resolve,reject)=>{
            fetch(url, options)
            .then(response=>{
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    return response.json();
                }
                return response.text();
            })
            .then(data=>resolve(data))
            .catch(error=>reject(error))
        })
    }

    static getData<T>(url:string):Promise<T>{
        return this.fetchBase(url, {
            method:'GET',
        })
    }

}