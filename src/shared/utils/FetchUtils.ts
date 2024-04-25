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
            // headers:{
            //     'x-api-key':'JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QiLCJpYXQiOjE1MTYyMzkwMjJ9'
            // }  
        })
    }

    static postData<T>(url:string, body:T):Promise<T>{
        return this.fetchBase(url, {
            method:'POST',
            headers:{
                'x-api-key':'JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QiLCJpYXQiOjE1MTYyMzkwMjJ9',
                'Content-Type': 'application/json' 
            },
            body:JSON.stringify(body)
        })
    }

    static putData<T>(url:string, body:T):Promise<T>{
        return this.fetchBase(url, {
            method:'PUT',
            headers:{
                'x-api-key':'JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QiLCJpYXQiOjE1MTYyMzkwMjJ9',
                'Content-Type': 'application/json' 
            },
            body:JSON.stringify(body)
        })
    }

    static deleteData<T>(url:string):Promise<T>{
        return this.fetchBase(url, {
            method:'DELETE',
            headers:{
                'x-api-key':'JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QiLCJpYXQiOjE1MTYyMzkwMjJ9',
                'Content-Type': 'application/json' 
            }
        })
    }






}