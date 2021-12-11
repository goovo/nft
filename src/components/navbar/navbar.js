import React, { Component } from 'react';
import Web3 from 'web3';

import {
  Link
} from "react-router-dom";


class Navbar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      account: ''
    }
  }

  async componentWillMount() {
    await this.loadMetaMask()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      window.loaded_web3 = true
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      window.loaded_web3 = true
    }
    else {
      window.alert('检测到当前环境非BSC. 您应该尝试使用MetaMask钱包连接至BSC网络!')
    }
  }

  async loadMetaMask() {
    await this.loadWeb3()

    const accounts = await window.web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  render() {

    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed-top rounded navbar-adj">
          <div className="d-flex mx-4">
            <Link to={{
              pathname: `/`,
            }}>
              {/* <img alt="icon" className="iconimage m-0" src="" /> */}
            </Link>
            <p className="navbar-brand m-0">深度NFTs市场</p>
          </div>

          {
            (window.loaded_web3) ?
              (
                <div className="d-flex mx-4 justify-content-between ">
                  <div className="m-1">
                    <Link to={{
                      pathname: `/explore`,
                    }}>
                      <input
                        type='submit'
                        className='btn btn-block btn-outline-light rounded-0 '
                        value="探索"
                      />
                    </Link>
                  </div>
                  <div className="m-1">
                    <Link to={{
                      pathname: `/mint`,
                    }}>
                      <input
                        type='submit'
                        className='btn btn-block btn-outline-light rounded-0 '
                        value="创作NFT"
                      />
                    </Link>
                  </div>
                  <div className="m-1">
                    <Link to={{
                      pathname: `/mint-token`,
                    }}>
                      <input
                        type='submit'
                        className='btn btn-block btn-outline-light rounded-0 '
                        value="购买平台Token"
                      />
                    </Link>
                  </div>
                  <div className="m-1">
                    <Link to={{
                      pathname: `/my-collection`,
                    }}>
                      <input
                        type='submit'
                        className='btn btn-block btn-outline-light rounded-0'
                        value="我的珍藏"
                      />
                    </Link>
                  </div>
                  <div className="d-flex m-0">
                    <div className="">
                      {
                        <p className=" m-2">欢迎! {this.state.account}</p>
                      }
                    </div>
                    <div className="">
                      <img alt="profile" className="profile" src="../profile.png" />
                    </div>
                  </div>

                </div>
              )
              :
              (
                <button type="button" onClick={(e) => { this.loadMetaMask() }} className="btn btn-outline-light mx-4 rounded-0">连接钱包</button>
              )
          }
          {/* <button type="button" onClick={this.metam()} className="btn btn-primary m-3">Login</button> */}
        </nav>
      </div>
    )
  }
}

export default Navbar;