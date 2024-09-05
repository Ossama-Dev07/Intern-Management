import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../style/ChangeN.css"; // Import your CSS file

export default function ChangeN() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [newData, setNewData] = useState({
    Nom: "",
    Prenom: "",
    NTelelephone: "",
    Email: "",
    password: "",
  });
  const { CEF } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/stagiaire/${CEF}`)
      .then((res) => {
        setUserData(res.data);
        setNewData({
          Nom: res.data.Nom,
          Prenom: res.data.Prenom,
          NTelelephone: res.data.NTelelephone,
          Email: res.data.Email,
          password: res.data.password,
        });
      })
      .catch((err) => console.log(err));
  }, [CEF]);

  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8081/updateUser/${CEF}`, newData)
      .then((res) => {
        console.log(res.data);
        navigate("/admin");
      })
      .catch((err) => console.log(err));
  };

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2 className="title">Modifier Stagiare</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Nom:</label>
          <br />
          <input
            className="input-field"
            type="text"
            name="Nom"
            value={newData.Nom}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="label">Prenom:</label>
          <br />
          <input
            className="input-field"
            type="text"
            name="Prenom"
            value={newData.Prenom}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="label">NTelelephone:</label>
          <br />
          <input
            className="input-field"
            type="text"
            name="NTelelephone"
            value={newData.NTelelephone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="label">Email:</label>
          <br />
          <input
            className="input-field"
            type="email"
            name="Email"
            value={newData.Email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="label">Password:</label>
          <br />
          <input
            className="input-field"
            type="text"
            name="password"
            value={newData.password}
            onChange={handleChange}
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
