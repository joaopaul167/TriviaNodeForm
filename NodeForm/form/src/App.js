import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
const default_value = {
  email: "",
  name: "",
  birthday: "",
  password: "",
  gender: "",
  phone: "",
  city: "",
  is_smoker: null,
}
const SignupForm = () => {
  const [data, setData] = useState(default_value);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      birthday: "",
      password: "",
      gender: "",
      phone: "",
      city: "",
      is_smoker: null,
    },
    onSubmit: async (values) => {
      const newData = await axios.get("http://localhost:3333/api/v1/get_data", {
        params: values,
      });
      setData(newData.data);
    },
  });
  return (
    <div style={{ flexDirection: "row", display: "flex", flex: 1 }}>
      <form
        style={{ marginTop: 100, width: "50%", paddingLeft:100}}
        onSubmit={formik.handleSubmit}
      >
        <div style={{width: '80%', flexDirection: 'row', justifyContent:'space-between', display: 'flex', paddingRight:100, marginBottom:40}}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div style={{width: '80%', flexDirection: 'row', justifyContent:'space-between', display: 'flex', paddingRight:100, marginBottom:40}}>
          <label htmlFor="email">Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div style={{width: '80%', flexDirection: 'row', justifyContent:'space-between', display: 'flex', paddingRight:100, marginBottom:40}}>
          <label htmlFor="email">Data de Nascimento</label>
          <input
            id="birthday"
            name="birthday"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.birthday}
          />
        </div>
        <div style={{width: '80%', flexDirection: 'row', justifyContent:'space-between', display: 'flex', paddingRight:100, marginBottom:40}}>
          <label htmlFor="email">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div style={{width: '80%', flexDirection: 'row', justifyContent:'space-between', display: 'flex', paddingRight:100, marginBottom:40}}>
          <label htmlFor="email">Gênero</label>
          <select
            id="gender"
            name="gender"
            onChange={formik.handleChange}
            value={formik.values.gender}
          >
            <option value="">Selecione um genero</option>
            <option value="male">Homem</option>
            <option value="female">Mulher</option>
          </select>
        </div>
        <div style={{width: '80%', flexDirection: 'row', justifyContent:'space-between', display: 'flex', paddingRight:100, marginBottom:40}}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <div style={{width: '80%', flexDirection: 'row', justifyContent:'space-between', display: 'flex', paddingRight:100, marginBottom:40}}>
          <label htmlFor="smoker">Fumante</label>
          <input
            id="is_smoker"
            name="is_smoker"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.is_smoker}
          />
        </div>
        <div style={{width: '80%', flexDirection: 'row', justifyContent:'space-between', display: 'flex', paddingRight:100, marginBottom:40}}>
          <label htmlFor="smoker">Cidade</label>
          <input
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}            
          />
        </div>
        <button onClick={formik.resetForm} style={{marginRight:100}}>Limpar</button>
        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop:100}}>
        <h2>Nome: {data.name}</h2>
        <h2>Email: {data.email}</h2>
        <h2>Data de Nascimento: {data.birthday}</h2>
        <h2>Senha: {data.password}</h2>
        <h2>Gênero: {data.gender}</h2>
        <h2>Phone: {data.phone}</h2>
        <h2>Cidade: {data.city}</h2>
        <h2>Fumante: 
          {
            data.is_smoker == null 
              ? '' 
              : 
              data.is_smoker 
                ? "Sim" 
                : "Não"
          }
        </h2>
        <button
          onClick={()=> setData(default_value)}
          title="Limpar"
          >Limpar</button>
      </div>
    </div>
  );
};
function App() {
  return <div className="App">{SignupForm()}</div>;
}

export default App;
