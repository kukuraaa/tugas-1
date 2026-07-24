import { useState } from "react";

function Form() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nama === "" || email === "") {
      alert("Nama dan Email tidak boleh kosong!");
      return;
    }

    setData({
      nama,
      email,
    });

    setNama("");
    setEmail("");
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama</label>
          <br />
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama"
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email"
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      {data && (
        <div>
          <h3>Data yang Dimasukkan</h3>

          <p>Nama : {data.nama}</p>
          <p>Email : {data.email}</p>
        </div>
      )}
    </div>
  );
}

export default Form;