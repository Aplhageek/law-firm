import React from 'react';
import styles from './Testimonials.module.css';
import Carousel from '../Carousel/Carousel'

const TestimonialsData = [
    {
        id: 1,
        avtar: 'https://s3-alpha-sig.figma.com/img/1994/067c/3ac3d40d2341bd81bd13e2e7f755bf0d?Expires=1696809600&Signature=TyJEGxx6Ms5uYmc~aR8nGH7XLVfDQZXYhKMLRuH-MaZcROXPlIv4i0jY1-b1yNLyqApVfOw7uX0bDheg42Q1D5niRvaUlrC3JewitCmh0skWVW5QMfoDDbUClYftXinKE14uujsW0JOfHmQ6ewae0ZGZ6DWUItqQ5X7yQhJFkZIw213pyCbY66Hy0sjj9s6fV1oQra29TiLWYBunJ1N06G8idcoyUagIYnoxcfHW0~Qne9fFFO8PNjvwTbJQTWNlC5SFlieJ83eJmOWtonBlCoPP5zjJp3jtUErrgTEz9AAWjxmuukrNe9SM7QW2H4jTf4BG1DoLBdmZo~e5EVvBXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Jane Cooper',
        designation: 'Ceo of Hunt',
        descrption: 'Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer.sitaliqua dolor do amet sint.Velit officia'
    },
    {
        id: 2,
        avtar: 'https://s3-alpha-sig.figma.com/img/8fe7/ad6b/85c053224d98bfd7e680608c07f3c239?Expires=1696809600&Signature=eUKYGBP9Mof~gk6RhIluOmwC-khpYFR0KxIXGvMthHszHXe12aYZpcafIlAdLWUs3wHyofccM7mlM7seKBx-OCOhu9r0bFJxNxRXxMxwNhhLgfnS9TxSIGmGkBRPI72DMxKKM7K14hTcPsYmnbxchjex38zx3QE-sRx8nsk4zRbvh1O1~2oDzD-V4ODVzt2sgdeFqXaNwo9X3VaA89oqKY3ZCs1cKO4Qi2CLF-QX1eRkOiwzPYwsISHepxMbR4iFmPVUsk92KhSc2-oXadVpv83MVZ8TKQmV4Recbrk4IAfEzr0AuQXUbYyXf4FnJP3lJ7Sjk~ziE~1b7lr2KatqGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Devon Lane',
        designation: 'Ceo of Hunt',
        descrption: 'Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer.sitaliqua dolor do amet sint.Velit officia'
    },
    {
        id: 3,
        avtar: 'https://s3-alpha-sig.figma.com/img/aac6/b1b1/8acee54880feb3c84cfacdb2ff89076d?Expires=1696809600&Signature=azgMlhJImVvyQrAxWmG05HOQ55tA67QmCENpbt48ho-45NQleWiShL2C8X-0osIYJbwUla0gbj201oydy7l-2~CZrheOVn3gBOwyIR8RHLEQ~wRgpmIdPEkpIQzuQ7v6dh5U~nhluKZx2sGqDyFUsONUFVAsskyyjAoXy9B9SGLzIOmKsUE69yKm3IF2ygx6aISQmmcdP7yn7neUBdxMIZfR3y9KdyU0Pqky2XfNxEV6dPq~9EsUDNOI27myNGtN1P57KJFNXe3HQhL-BOuMCxT5KNClSarGq5-1OABml84wBHw4LXMwstuzSaU5SoSndm7Ky588NjQJLzl16PUfKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Robert Fox',
        designation: 'Ceo of Hunt',
        descrption: 'Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer.sitaliqua dolor do amet sint.Velit officia'
    },
    {
        id: 4,
        avtar: 'https://s3-alpha-sig.figma.com/img/1994/067c/3ac3d40d2341bd81bd13e2e7f755bf0d?Expires=1696809600&Signature=TyJEGxx6Ms5uYmc~aR8nGH7XLVfDQZXYhKMLRuH-MaZcROXPlIv4i0jY1-b1yNLyqApVfOw7uX0bDheg42Q1D5niRvaUlrC3JewitCmh0skWVW5QMfoDDbUClYftXinKE14uujsW0JOfHmQ6ewae0ZGZ6DWUItqQ5X7yQhJFkZIw213pyCbY66Hy0sjj9s6fV1oQra29TiLWYBunJ1N06G8idcoyUagIYnoxcfHW0~Qne9fFFO8PNjvwTbJQTWNlC5SFlieJ83eJmOWtonBlCoPP5zjJp3jtUErrgTEz9AAWjxmuukrNe9SM7QW2H4jTf4BG1DoLBdmZo~e5EVvBXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Jane Cooper',
        designation: 'Ceo of Hunt',
        descrption: 'Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer.sitaliqua dolor do amet sint.Velit officia'
    },
    {
        id: 5,
        avtar: 'https://s3-alpha-sig.figma.com/img/8fe7/ad6b/85c053224d98bfd7e680608c07f3c239?Expires=1696809600&Signature=eUKYGBP9Mof~gk6RhIluOmwC-khpYFR0KxIXGvMthHszHXe12aYZpcafIlAdLWUs3wHyofccM7mlM7seKBx-OCOhu9r0bFJxNxRXxMxwNhhLgfnS9TxSIGmGkBRPI72DMxKKM7K14hTcPsYmnbxchjex38zx3QE-sRx8nsk4zRbvh1O1~2oDzD-V4ODVzt2sgdeFqXaNwo9X3VaA89oqKY3ZCs1cKO4Qi2CLF-QX1eRkOiwzPYwsISHepxMbR4iFmPVUsk92KhSc2-oXadVpv83MVZ8TKQmV4Recbrk4IAfEzr0AuQXUbYyXf4FnJP3lJ7Sjk~ziE~1b7lr2KatqGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Devon Lane',
        designation: 'Ceo of Hunt',
        descrption: 'Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer.sitaliqua dolor do amet sint.Velit officia'
    },
    {
        id: 6,
        avtar: 'https://s3-alpha-sig.figma.com/img/aac6/b1b1/8acee54880feb3c84cfacdb2ff89076d?Expires=1696809600&Signature=azgMlhJImVvyQrAxWmG05HOQ55tA67QmCENpbt48ho-45NQleWiShL2C8X-0osIYJbwUla0gbj201oydy7l-2~CZrheOVn3gBOwyIR8RHLEQ~wRgpmIdPEkpIQzuQ7v6dh5U~nhluKZx2sGqDyFUsONUFVAsskyyjAoXy9B9SGLzIOmKsUE69yKm3IF2ygx6aISQmmcdP7yn7neUBdxMIZfR3y9KdyU0Pqky2XfNxEV6dPq~9EsUDNOI27myNGtN1P57KJFNXe3HQhL-BOuMCxT5KNClSarGq5-1OABml84wBHw4LXMwstuzSaU5SoSndm7Ky588NjQJLzl16PUfKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Robert Fox',
        designation: 'Ceo of Hunt',
        descrption: 'Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint.Velit officia consequatduis enim velit mollit Exer.sitaliqua dolor do amet sint.Velit officia'
    }

]

const Testimonials = () => {
    return (
        <div className={styles.Testimonials_wrapper}>
            <p className={styles.title}>What says our <br /> happy Clients</p>
            <div className="carousel_wrapper">
                <Carousel  data={TestimonialsData}/>
            </div>
        </div>
    )
}

export default Testimonials;