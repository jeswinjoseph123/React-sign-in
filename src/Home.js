import axios from 'axios';
import React,{Component} from 'react';


class Home extends Component {

    state ={
        
    }

    componentDidMount(){
        const config ={
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };



        axios.get('http',config).then(
            res=>{
                console.log(res);
            },
            err=>{
                console.log(err)
            }
        )
    }


    render(){
        return(
            <h2>You are not logged in</h2>
        )
    }
}
export default Home;