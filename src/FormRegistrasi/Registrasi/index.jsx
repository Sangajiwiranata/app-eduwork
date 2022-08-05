import React, { Component } from 'react'
import './Css/index.css'

const ShowErrors = ({ errors }) => {
    return (
        <ul style={{ color: 'red', marginLeft: '-20px' }}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )

}

export default class Registrasi extends Component {
    state = {
        nama: '',
        alamat: '',
        lahir: '',
        tanggal: '',
        kelamin: '',
        email: '',
        hp: '',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const { nama, alamat, lahir, tanggal, kelamin, email, hp } = this.state

        let message = [];

        if (nama.length === 0) {
            message = [...message, "Nama Tidak Boleh Kosong"]
        }
        if (alamat.length === 0) {
            message = [...message, "Alamat Tidak Boleh Kosong"]
        }
        if (lahir.length === 0) {
            message = [...message, "Tempat Lahir Tidak Boleh Kosong"]
        }
        if (tanggal.length === 0) {
            message = [...message, "Tanggal Lahir Tidak Boleh Kosong"]
        }
        if (kelamin.length === 0) {
            message = [...message, "Jenis Kelamin Tidak Boleh Kosong"]
        }
        if (email.length === 0) {
            message = [...message, "Email Tidak Boleh Kosong"]
        }
        if (hp.length === 0) {
            message = [...message, "No. HP Tidak Boleh Kosong"]
        }

        if (message.length > 0) {
            this.setState({ errors: message })
        } else {
            alert(
                `
                Nama : ${nama}
                Alamat : ${alamat}
                Tempat Lahir : ${lahir}
                Tanggal Lahir : ${tanggal}
                Jenis Kelamint : ${kelamin}
                Email : ${email}
                No. HP : ${hp}
                `
            )
        }

    }
    render() {

        return (
            <div className='container'>
                <h2>Form Registrasi</h2>
                <hr />
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                <form onSubmit={this.handleSubmit}>
                    <label>Nama</label><br />
                    <input className="_text" type="text" onChange={e => { this.setState({ nama: e.target.value }) }} /><br />

                    <label>Alamat</label><br />
                    <textarea
                        cols="50"
                        rows="3"
                        onChange={e => { this.setState({ alamat: e.target.value }) }}
                    ></textarea><br />

                    <label>Tempat Lahir</label><br />
                    <input
                        className="_text"
                        type="text"
                        onChange={e => { this.setState({ lahir: e.target.value }) }}
                    /><br />

                    <label>Tanggal Lahir</label><br />
                    <input
                        type="date"
                        onChange={e => { this.setState({ tanggal: e.target.value }) }}
                    /><br />

                    <label>Jenis Kelamin</label><br />
                    <input type="radio" name='gender' value="Laki-Laki" onChange={e => { this.setState({ kelamin: e.target.value }) }} />Laki-Laki
                    <input type="radio" name='gender' value="Perempuan" onChange={e => { this.setState({ kelamin: e.target.value }) }} />Perempuan <br />

                    <label>Email</label><br />
                    <input className="_text" type="email" onChange={e => { this.setState({ email: e.target.value }) }} /><br />

                    <label>No. HP</label><br />
                    <input className="_text" type="number" onChange={e => { this.setState({ hp: e.target.value }) }} /><br /><br />

                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}
