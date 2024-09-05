import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Stagiaire.css";
import { IoLogOut } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";

export default function Stagiaire() {
  const [name, setName] = useState([]);
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [isChangingPhoneNumber, setIsChangingPhoneNumber] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [isAddingEmail, setIsAddingEmail] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8081/stagiaire")
      .then((res) => {
        if (res.data.valid) {
          setName(res.data.user);
          console.log(res.data.user);
        } else {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:8081/logout")
      .then(() => {
        setName([]);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  const handleService = () => {
    navigate("/services");
  };

  const handleChangePhoneNumber = () => {
    axios
      .post("http://localhost:8081/changePhoneNumber", { newPhoneNumber })
      .then((res) => {
        console.log(res.data.message);
        setName((prevName) => {
          const updatedName = [...prevName];
          updatedName[0].NTelelephone = newPhoneNumber;
          return updatedName;
        });
        console.log(name);
        setIsChangingPhoneNumber(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAddEmail = () => {
    axios
      .post("http://localhost:8081/addEmail", { newEmail })
      .then((res) => {
        console.log(res.data.message);
        setName((prevName) => {
          const updatedName = [...prevName];
          updatedName[0].Email = newEmail;
          return updatedName;
        });
        setIsAddingEmail(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="logout">
        <button onClick={handleService} className="service-btn">
          <MdMiscellaneousServices className="hh" /> Services
        </button>
        <button onClick={handleLogout} className="logout-btn">
          <IoLogOut className="hh" /> Logout
        </button>
      </div>
      <div>
        <div className="infocard">
          {name.map((value, index) => (
            <>
              <h1>
                Cart des Informations de Mme/Mr{" "}
                <span style={{ color: "#04AA6D" }}>{value.Nom}</span>
              </h1>
              <div key={index} className="info">
                <div>
                  <p>
                    <strong>CEF:</strong>
                    {value.CEF}
                  </p>
                  <p>
                    <strong>Nom:</strong>
                    {value.Nom}
                  </p>
                  <p>
                    <strong>Nationalite:</strong>
                    {value.Nationalite}
                  </p>
                  <p>
                    <strong>Etudiant Actif:</strong>
                    {value.EtudiantActif ? "oui" : "non"}
                  </p>
                  <p>
                    <strong>Etablissment:</strong>
                    {value.Site}
                  </p>
                  <p>
                    <strong>NTelelephone:</strong>
                    {value.NTelelephone}
                  </p>
                  {isChangingPhoneNumber ? (
                    <div>
                      <input
                        type="text"
                        value={newPhoneNumber}
                        onChange={(e) => setNewPhoneNumber(e.target.value)}
                        className="input-field"
                      />
                      <button
                        onClick={handleChangePhoneNumber}
                        className="logout-btn"
                      >
                        Save Numero de Telephone
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsChangingPhoneNumber(true)}
                      className="service-btn"
                    >
                      Change Numero de Telephone
                    </button>
                  )}
                </div>
                <div>
                  <p>
                    <strong>CIN:</strong>
                    {value.password}
                  </p>
                  <p>
                    <strong>Prenom:</strong>
                    {value.Prenom}
                  </p>
                  <p>
                    <strong>DateNaissance:</strong>
                    {value.DateNaissance}
                  </p>
                  <p>
                    <strong>anneeEtude:</strong>
                    {value.anneeEtude}
                  </p>
                  <p>
                    <strong>Filière:</strong>
                    {value.Filière}
                  </p>
                  <p>
                    <strong>Email:</strong>
                    {value.Email}
                  </p>
                  {isAddingEmail ? (
                    <div>
                      <input
                        type="text"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        className="input-field"
                      />
                      <button onClick={handleAddEmail} className="logout-btn">
                        Save email
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsAddingEmail(true)}
                      className="service-btn"
                    >
                      Ajouter Email
                    </button>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
