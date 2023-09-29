import React from 'react'
import styles from './ImageGallery.module.css';

const url  = [
    'https://s3-alpha-sig.figma.com/img/c5e0/6b00/7c0b32a7459f3f93e948c826fb8285fa?Expires=1696809600&Signature=Ja52lDlj3CrMKYDIO4LuFR6fpR~zGxaew1p2bZYE~SGyYNBPTzqCUeTeQCcObhmvAf6keoz6UQKeRWsZtnJKsmzApfccgFkimFPORrrCa1CyBm1qRbW9eB-8CV9WdwnhZYbeMsK2AzCRXPTXGwHWs4MxoWQwTyJI0HQ69OInH2kKEDgWz77NCo5kYM8lMzW9s~02Clcg3FgPtv8Na7XgcD9Jmixsj0dlGSBVzQHe1CRrwsydwtpxFmD07sUGsKKOrmT2~Aso2GDoUzqW9SSMtlsTfrK2nymOGaROpIa6PvQTPZ8Oy32-gugct0CsFHQ4p6VUQLWfjS072780jhlCRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/a84e/eb93/e84ba9f312f91841a004e8392d9027e5?Expires=1696809600&Signature=h1Mz3bwM49ndXnknWRSKPSEqcVOhI8YEJg2EiYNdOfn1fgfAw96WdgI0c63hZDlTqBiF4NsWLlbR5jwM-dGJrzZW1qhWOzvM0AI0abB7Gwhu2QqtzxXaDeC8ykMUnQ6ONqZ7wVPZlIauF8Fp0-u7-hVq3a0KiaLlSDJkZZzC7B9Q9dxF2nAMvlBtbIsm2BSoPCLc0o5VrPl9ALw1I4e4IF1FF9oLZCJmCfijPGFRRNAch2gYqDsSJ8hnDHNzbnqOLonWvFlXdrP91plCp3uhJYDR3MN5TJx-N3j3KLUUWaCTh2pqVCwbJLWLH6JvMOnHhXNdSJ2-rEiYEGKWeOuQNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/0134/94ae/20fe77e2ba4511c0eac9a6a8e2e442e9?Expires=1696809600&Signature=Hsg8rCvvRkOU~WtthTvIrz~0dVvO5XJB7tiiOEL1MJLwp1qsrOyMoINtm0wenSYc~JWKv5o43cgYwp-45D5xQV9dO55IrC-8D-FuukslT7u9Yru8tl1fmk6rfCUZfZWV2qVbV6CpNpYKX5Q-SUxFjJLPOS7OclSwnYGJPZTzIlNYLva2CV4tQqw786deF6enrnoKL-3NQGl421UQFWnjRtgX0DjLkjpIrCv046I7gRPGMndQJUfZB63lgU8YqlKnnxJ6AvzVVJBhb7iZlpb9foWM59ADr2kDm3PYZKJZJ6dWogk4EPC5HrcjAsIcRGTOJq-EBAGt5XXPAYlRWTs4DQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/967e/a809/6e48ac723c88ed39751352f5c9436c2a?Expires=1696809600&Signature=MQ-X266zq8OMVfGKM3RotXAAntCDm-vNYs8ISZmSAvT6FgSiFisCZBmHOFKl3vMv-Eoi0SA8ZS-WUFgRAuS4BjfGGjYqiGEi1TBKEoIxgW7cKnaAPFDltYiWP7edvRx7Vh6z7J6Hjq89Ao3Zco-DbQs9i0u28TdJtEh-LEUf01UoUq3aqpGRQVLjAwgFZ4oQDB~Y1liyXiQY90gDv0sxze5nf2dvfYoUFNh6yzv1NLqVUkMwTVmg~xZWmFMkbvLzHuKQcO2aCNt599yx1aw9rS310kdjW2BWv7pObIugymwhWERTxMQL32odN6Mnv11FcTZrd42QqgX~504Z0qLP1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/67f6/5c6c/48e8eefdf399cab04f83a10d965770f1?Expires=1696809600&Signature=qKkFlq6U1i4ZHJOLqWii45UAtXAnS3TyECExEm7fdt-VBeROLQnJXJGk1nfUcETvjPtbQtuP90aiQ0sjdRZtczGD47pujWMHXYT-9pBmJbaJjAED7wVeKVe0VN9-NDBfxxhZjNyxKgy1HUiMEo8deJkZi1pL86VcOBH5BtdoebtCgNx3j1kF4jlLOP~zpWSF3zGLm-j79QQ3XRVhQkIWxDy0~XMcQNkOs6JAbS7dcJzwP8BsQnuELweHpCPl3oC6WZcZ~gYzxROl2qrjRDlTKYJ-1sxnu0uSUt~p5cDx9PCbZSkNRuX2XPouiXJhOHHyrDx5Wv1yoQsQHlRVk5CQcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/68d0/8df3/8947e8d751a269f4d5965ea6d3152054?Expires=1696809600&Signature=buauh3tBxqsx7fI-CF45PcidOLZXrOU6ugRB6iar1z~aYvz5NksLldN8k1FiTVl3003-gMd5-k07kGcGuKz9Lj1XC87QlPazF2RofVZFYdvg6CTX~pJntBXntN7AO~73s5yuIIrtnUqb3pDJsN9P4dXgLfUrZY5CTRrIQ63HNiU~qc5lyNxtaRW~qUMMNwlckakM3gxBZc02xtQ9f7hH-3RjAz4biletHPPt9g2r61yYdrDPPX-1PUMk6DgCvG-ocBToXYNstkIiwuVvmHNbTpnqFG1x5rsUGaRhepY6pU1Nt1xBYdnM331X9wX--LVrZPQaIxxvb2LZMiuT4yydBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
]


const ImageGallery = () => {
  return (
    <div className={styles.galleryContainer} >
        <p className={styles.ImageGalleryPara}>Area of Practices</p>
        <div className={styles.imageGallery}>
            <div className={`${styles.gridItem} ${styles.col_start_stretch}`}> <p className={styles.oberlayText}>BUSINESS LAW</p> <img src={url[0]} alt="" /> </div>
            <div className={`${styles.gridItem} ${styles.sqaure_container}` }> <p className={styles.oberlayText}>Partnership LAW</p> <img src={url[1]} alt="" /> </div>
            <div className={`${styles.gridItem} ${styles.sqaure_container}` }> <p className={styles.oberlayText}>REAL ESTATE LAW</p> <img src={url[2]} alt="" /> </div>
            <div className={`${styles.gridItem} ${styles.col_end_stretch}`  }> <p className={styles.oberlayText}>BUSINESS LAW</p> <img src={url[3]} alt="" /> </div>
            <div className={`${styles.gridItem} ${styles.col_start_stretch}`}> <p className={styles.oberlayText}>LANDLORD DISPUTES </p> <img src={url[4]} alt="" /> </div>
            <div className={`${styles.gridItem} ${styles.sqaure_container}` }> <p className={styles.oberlayText}>ELDER ABUSE</p> <img src={url[5]} alt="" /> </div>
        </div>
    </div>
  )
}

export default ImageGallery;