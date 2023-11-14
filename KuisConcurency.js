class NetworkError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NetworkError';
    }
  }
  
  // TODO: 1
  const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOffline) {
        reject(new NetworkError('Gagal mendapatkan data dari internet'), null);
      }
      const user ={ name: 'John', age: 18 };
      resolve(user);
    }, 500);
  });
  };
  
  
  // TODO: 2
  async function gettingUserName () {
    try{
      const pesan = await fetchingUserFromInternet(false);
              return pesan.name;
        } catch (error) {
          console.log(error.message);
        }
   }
  
  
  /**
   * Hiarukan kode di bawah ini
   */
  
  export {fetchingUserFromInternet, gettingUserName, NetworkError} ;