import axios from "axios"

const getModuleData = () => {
    axios.get('http://localhost:4000/module/1').then(response => response.data)
}

const addModuleLike = () => {
    axios.post('http://localhost:4000/module/1/like').then(response => response.data)
}

export {getModuleData, addModuleLike}
