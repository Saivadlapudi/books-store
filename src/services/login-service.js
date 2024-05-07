import axios from "axios";

class LogInService {
    async login() {
    const response = {
        data:null,
        error:null
    }
        try{
          const resp = await axios.get("http://localhost:3000/credentials")
          if(resp){
            response.data = resp
          } 
        }
        catch (error){
            console.log(error)
        }
    }
}
export default new LogInService();