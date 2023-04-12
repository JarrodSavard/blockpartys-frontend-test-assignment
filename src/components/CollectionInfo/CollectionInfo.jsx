import React from 'react'
import styles from './CollectionInfo.module.css'
import CopyTextIcon from '../../assets/copyIcon.png';
import OpenNewPageIcon from '../../assets/openPageIcon.png';


const CollectionInfo = ({ collectionName, collectionAddress }) => {

    const truncate = (str) => {
		str = str.toString();
		return str.length > 6 ? str.substring(0, 6) + '...' + str.substring(str.length - 4, str.length) : str;
	};
  return (
    <div className={styles.container}>
				<h1 className={styles.collectionName}>{collectionName}</h1>
				<div className={styles.iconAndLinkContainer}>
					<div className={styles.collectionAddress} style={{ cursor: 'pointer', color: 'inherit' }} onClick={() => {navigator.clipboard.writeText(String(collectionAddress))}}>
						<span  style={{marginRight:"6px"}} className={styles.collectionAddress}>{truncate(collectionAddress)}</span>
						<img src={CopyTextIcon} alt="copy text icon"></img>
					</div>
					<div  className={styles.etherscanLinkContainer}>
						<a rel="noreferrer" target="_blank" style={{ cursor: 'pointer', color: 'inherit' }} href={`https://etherscan.io/address/${collectionAddress}`}>
							<span style={{marginRight:"6px"}} className={styles.etherscanAddress}>View on Etherscan</span>
							<img src={OpenNewPageIcon} alt="copy text icon"></img>
						</a>
					</div>
				</div>
			</div>
  )
}

export default CollectionInfo