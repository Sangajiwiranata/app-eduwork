import React from "react";

class Barang extends React.Component {
    constructor(prons) {
        super(prons)

        this.state = {
            stock: 0,
            disabled: false
        }

    }

    BeliBarang = () => {
        if (this.state.stock > 0){
            this.setState({stock: this.state.stock - 1
            })
        }
    }

    TambahBarang = () => {
        this.setState({
            stock: this.state.stock + 1
            
        });
    }

    render() {
        return (
            <div className="box">
                <h5>Masukkan Keranjang</h5>
                <span>Kuantitas     </span>
                <button onClick={this.BeliBarang}><b>-</b></button>
                <span>{" "}{this.state.stock}{" "}</span>
                <button onClick={this.TambahBarang}><b>+</b></button>
                <span>{"  "}{this.props.sisa}</span>
            </div>
        )
    }
}

export default Barang;