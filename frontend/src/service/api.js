import axios from 'axios';


// const usersUrl = 'http://localhost:3003/users';
const Url = 'http://localhost:3002';
export const getAbout = async () => {
    // id = id || '';
    return await axios.get(`${Url}/about/get-about`);
}
export const addAbout = async (about) => {
    return await axios.post(`${Url}/about/save-about`,{text:about});
}
export const deleteAbout = async (id) => {
    return await axios.delete(`${Url}/about/${id}`);
}
export const updateAbout = async (id, about) => {
    return await axios.patch(`${Url}/about/${id}`, about)
}

// For admins ************************************************
export const getAdmin = async () => {
    // id = id || '';
    return await axios.get(`${Url}/admin/get-admindetail`);
}
export const addAdmin = async (admin) => {
    return await axios.post(`${Url}/admin/save-admindetail`,{username:admin.username,password:admin.password});
}
export const deleteAdmin = async (id) => {
    return await axios.delete(`${Url}/admin/${id}`);
}
export const updateAdmin = async (id, about) => {
    return await axios.patch(`${Url}/admin/${id}`, about)
}


// For PROjects
export const getProject = async () => {
    // id = id || '';
    return await axios.get(`${Url}/project/get-project`);
}
export const addProject = async (project) => {
  
    return await axios.post(`${Url}/project/save-project`,{project},{
        headers:{
            'Content-Type':'multipart/form-data',
        }
    });
}
export const deleteProject = async (id) => {
    return await axios.delete(`${Url}/project/${id}`);
}
export const updateProject = async (id, project) => {
    return await axios.patch(`${Url}/project/${id}`, project)
}

// for what i do

export const getWhatIDo = async () => {
    // id = id || '';
    return await axios.get(`${Url}/whatido/get-whatido`);
}
export const addWhatIDo = async (whatido) => {
  
    return await axios.post(`${Url}/whatido/save-whatido`,{title:whatido.title,description:whatido.description});
}
export const deleteWhatIDo = async (id) => {
    return await axios.delete(`${Url}/whatido/${id}`);
}
export const updateWhatIDo = async (id, whatido) => {
    return await axios.patch(`${Url}/whatido/${id}`,whatido)
}

//for contact me form
export const getContact = async () => {
    // id = id || '';
    return await axios.get(`${Url}/contact/get-contactdetail`);
}
export const addContact = async (contact) => {
  
    return await axios.post(`${Url}/contact/save-contactdetail`,{name:contact.name,email:contact.email,message:contact.message});
}
export const deleteContact = async (id) => {
    return await axios.delete(`${Url}/contact/${id}`);
}
export const updateContact = async (id, contact) => {
    return await axios.patch(`${Url}/contact/${id}`,contact)
}