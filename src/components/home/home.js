import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    window.loaded_web3 = false;

    const history = useHistory();
    const handleClick1 = () => {
        history.push('/explore');
    }
    const handleClick2 = () => {
        history.push('/mint');
    }

    return (

        <div>
        <div className="head-title col-auto mx-4">
            <h4 className="mb-0 font-weight-normal">Home</h4>
        </div>
        <div className="row home-adj">
            <div className="col-sm-4">
            <div className="card shadow-sm">
                <div className="max-300">
                    <img alt="home" className="homeimage rounded-top" src={localStorage.getItem("new_nft_1")} />
                </div>
                <div className="text-title">特色NFT</div>
            </div>
            </div>

            <div className="col-sm-8 wrapper">
                <div className="heading-container">
                    <h2>Welcome to ZSK NFTs</h2>
                    <p className="text-secondary" style={{ fontSize: '18px',lineHeight:2,wordSpacing:2}}>
                        欢迎来到深度NFTs市场，在这里，您可以将图片转换成NFT作品并出售。
                    </p>
                </div>
            <div className="d-flex justify-content-end align-items-center align-self-end">
                <button type="button" onClick={handleClick1} className="btn btn-primary rounded-0 m-3">Explore NFTs</button>
                <button type="button" onClick={handleClick2} className="btn btn-primary rounded-0 m-3">Create NFTs</button>
            </div>
            </div>
            
        </div>
        </div>
    )
};

export default Home;
