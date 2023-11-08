import { useContext } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Routes/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import moment from 'moment';
moment().format();
const BidDetails = () => {
    const data =useLoaderData()
   
    const {email,jobDescription,deadLine,jobTitle,category,minimumPrice,maximumPrice}=data
    const {user}=useContext(AuthContext)
    const navigate =useNavigate()
   
    const handleBidData =(e)=>{
        e.preventDefault()
        const form =e.target
        const bidPrice =parseInt(form.bidPrice.value)
        const bidDeadLine =form.bidDeadLine.value
        const bidEmail =form.bidEmail.value
         if(bidEmail ==email){
           return Swal.fire({
                title: "ERROR!",
                text: "You can not bid your own job post!",
                icon: "error"
              });
              
         }
         if(bidPrice<minimumPrice || bidPrice>maximumPrice){
            return Swal.fire({
                title: "Please chack the Price range!",
                text: "You can not bid at this price!",
                icon: "error"
              });
        }
        if( moment(bidDeadLine).format('YYYY MM D') > moment(deadLine ).format('YYYY MM D') ||  moment().format('YYYY MM D') < moment( bidDeadLine).format('YYYY MM D')){
            return Swal.fire({
                title: "Please check the Dateline.!",
                text: "You can not bid this deadline!",
                icon: "error"
              });
        }
        const bidData ={bidPrice,bidDeadLine,bidEmail,email,jobTitle}
         axios.post('http://localhost:5000/bidjobs',bidData)
         .then(res=>{
            console.log(res.data);
            if(res.data.insertedId ){
               Swal.fire({
                title: "Bid Placed!",
                text: "You have successfully placed your bid!",
                icon: "success"
              })
              navigate('/mybids')
            }
         })
       
    }
    return (
        <div className="flex  flex-col py-20 items-center md:flex-row   gap-10">
             <div className='card border flex-1 shadow-xl'>
            
        <figure className="">
         <svg className="w-[320px] md:w-[400px] lg:w-[450px]" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 645.131 529.537"><path d="M86.927 501.654a3.613 3.613 0 0 1-2.619-6.263l.248-.984-.099-.236a9.703 9.703 0 0 0-17.898.066c-2.927 7.05-6.655 14.113-7.572 21.568a28.705 28.705 0 0 0 .504 9.872 115.086 115.086 0 0 1-10.47-47.799 111.08 111.08 0 0 1 .69-12.392q.57-5.06 1.583-10.047a116.42 116.42 0 0 1 23.087-49.342 30.983 30.983 0 0 0 12.886-13.368 23.633 23.633 0 0 0 2.15-6.459 29.36 29.36 0 0 1-1.893.175l-.596.031-.074.003a3.58 3.58 0 0 1-2.94-5.832l.813-1c.411-.514.833-1.018 1.244-1.532a1.782 1.782 0 0 0 .134-.154c.473-.586.946-1.162 1.42-1.748a10.352 10.352 0 0 0-3.394-3.28c-4.741-2.777-11.282-.854-14.706 3.434-3.435 4.288-4.083 10.304-2.89 15.662a41.485 41.485 0 0 0 5.738 12.793c-.257.33-.524.648-.781.977a117.172 117.172 0 0 0-12.23 19.375 48.71 48.71 0 0 0-2.908-22.624c-2.783-6.715-8-12.37-12.595-18.175-5.519-6.973-16.835-3.93-17.807 4.909l-.028.257q1.024.577 2.004 1.225a4.901 4.901 0 0 1-1.976 8.92l-.1.015a48.766 48.766 0 0 0 1.286 7.291 50.21 50.21 0 0 0 25 31.469c.4.205.792.41 1.193.606a119.597 119.597 0 0 0-6.438 30.296 113.433 113.433 0 0 0 .082 18.316l-.03-.216a29.974 29.974 0 0 0-10.233-17.308c-7.874-6.468-19-8.85-27.494-14.05a5.625 5.625 0 0 0-8.616 5.473l.035.227a32.925 32.925 0 0 1 3.691 1.779q1.024.577 2.004 1.226a4.901 4.901 0 0 1-1.976 8.919l-.1.015-.205.031a48.808 48.808 0 0 0 8.978 14.058 50.254 50.254 0 0 0 36.445 15.991h.01a119.562 119.562 0 0 0 8.032 23.447h28.692c.103-.319.195-.648.288-.967a32.6 32.6 0 0 1-7.94-.473c2.13-2.612 4.258-5.244 6.387-7.856a1.783 1.783 0 0 0 .134-.155c1.08-1.337 2.17-2.663 3.25-4v-.002a47.75 47.75 0 0 0-1.4-12.164Zm471.073 0a3.613 3.613 0 0 0 2.618-6.263l-.247-.984.098-.236a9.703 9.703 0 0 1 17.899.066c2.927 7.05 6.654 14.113 7.572 21.568a28.705 28.705 0 0 1-.504 9.872 115.086 115.086 0 0 0 10.469-47.799 111.08 111.08 0 0 0-.69-12.392q-.57-5.06-1.583-10.047a116.42 116.42 0 0 0-23.087-49.342 30.983 30.983 0 0 1-12.885-13.368 23.634 23.634 0 0 1-2.15-6.459c.628.083 1.265.134 1.892.175l.597.031.074.003a3.58 3.58 0 0 0 2.94-5.832l-.813-1c-.412-.514-.833-1.018-1.245-1.532a1.784 1.784 0 0 1-.133-.154c-.473-.586-.946-1.162-1.42-1.748a10.352 10.352 0 0 1 3.394-3.28c4.741-2.777 11.281-.854 14.706 3.434 3.435 4.288 4.083 10.304 2.89 15.662a41.485 41.485 0 0 1-5.739 12.793c.258.33.525.648.782.977a117.171 117.171 0 0 1 12.23 19.375 48.71 48.71 0 0 1 2.908-22.624c2.783-6.715 8-12.37 12.595-18.175 5.518-6.973 16.835-3.93 17.807 4.909l.027.257q-1.023.577-2.004 1.225a4.901 4.901 0 0 0 1.976 8.92l.1.015a48.767 48.767 0 0 1-1.285 7.291 50.21 50.21 0 0 1-25 31.469c-.401.205-.792.41-1.193.606a119.598 119.598 0 0 1 6.438 30.296 113.435 113.435 0 0 1-.083 18.316l.031-.216a29.974 29.974 0 0 1 10.233-17.308c7.874-6.468 19-8.85 27.494-14.05a5.625 5.625 0 0 1 8.616 5.473l-.035.227a32.926 32.926 0 0 0-3.692 1.779q-1.023.577-2.004 1.226a4.901 4.901 0 0 0 1.976 8.919l.1.015.206.031a48.808 48.808 0 0 1-8.978 14.058 50.254 50.254 0 0 1-36.446 15.991h-.01a119.563 119.563 0 0 1-8.031 23.447h-28.692c-.103-.319-.196-.648-.288-.967a32.6 32.6 0 0 0 7.939-.473c-2.129-2.612-4.258-5.244-6.386-7.856a1.781 1.781 0 0 1-.134-.155c-1.08-1.337-2.17-2.663-3.25-4v-.002a47.75 47.75 0 0 1 1.399-12.164Z" fill="#f2f2f2"/><path fill="#9e616a" d="M202.721 514.442h6.946l3.306-26.794h-10.252v26.794z"/><path d="m200.454 509.684 11.097-.663v4.755l10.551 7.287a2.97 2.97 0 0 1-1.687 5.414h-13.213l-2.277-4.703-.89 4.703h-4.98Z" fill="#2f2e41"/><path fill="#9e616a" d="m115.658 508.54 6.454 2.569 12.98-23.671-9.525-3.792-9.909 24.894z"/><path d="m115.311 503.281 10.556 3.49-1.759 4.417 7.108 10.672a2.97 2.97 0 0 1-3.57 4.406l-12.276-4.886-.376-5.212-2.566 4.04-4.628-1.842Zm73.407-68.567-11.583-54.057-18.088 60.061-28.641 56.954-.152.302-9.073-4.885c-1.28-23.125 1.76-44.796 12.883-63.745l5.267-52.012c.161-1.777 4.09-43.5 16.53-50.898l3.643-8.307 36.235-8.95.132.15a27.701 27.701 0 0 1 6.637 13.912l10.828 65.592.006.037-2.903 45.757 3.97 67.508h-14.368q-13.334-25.088-11.323-67.42Z" fill="#2f2e41"/><path d="M365.687 214.135c0 15.363 22.814 42.344 27.818 27.818 6.126-17.784 19.194-29.057 27.818-27.818 15.207 2.185-12.455-27.818-27.818-27.818a27.818 27.818 0 0 0-27.818 27.818Zm-5.844-87.12c-3.607 14.934 12.455 27.818 27.818 27.818a27.818 27.818 0 0 0 27.819-27.818c0-15.363-20.708-14.199-27.819-27.818-8.14-15.59-20.063-4.283-27.818 27.818Zm-128.552-1.168a27.818 27.818 0 0 0 27.818 27.818c15.364 0 28.265-12.461 27.818-27.818-.935-32.172-13.398-44.778-27.818-27.819-9.952 11.705-27.818 12.455-27.818 27.819Zm-2.337 88.288c-12.983-5.613 9.564 23.149 27.818 27.818 14.884 3.807 27.818-12.455 27.818-27.818a27.818 27.818 0 0 0-27.818-27.818c-15.364 0-13.716 33.914-27.818 27.818Z" fill="#e6e6e6"/><path d="M541.984 34.484H87.69a1.807 1.807 0 0 1 0-3.613h454.293a1.807 1.807 0 0 1 0 3.613Z" fill="#cacaca"/><ellipse cx="118.615" cy="10.823" rx="10.588" ry="10.823" fill="#3f3d56"/><ellipse cx="155.19" cy="10.823" rx="10.588" ry="10.823" fill="#3f3d56"/><ellipse cx="191.765" cy="10.823" rx="10.588" ry="10.823" fill="#3f3d56"/><path d="M519.963 2.683h-25.981a1.968 1.968 0 0 0 0 3.934h25.98a1.968 1.968 0 0 0 0-3.934Zm0 7.384h-25.981a1.968 1.968 0 0 0 0 3.935h25.98a1.968 1.968 0 0 0 0-3.935Zm0 7.375h-25.981a1.968 1.968 0 0 0 0 3.934h25.98a1.968 1.968 0 0 0 0-3.934Z" fill="#3f3d56"/><path d="M390.392 114.39h-37.21a5.889 5.889 0 0 0-5.888 5.888v37.21a5.889 5.889 0 0 0 5.888 5.89h37.21a5.889 5.889 0 0 0 5.89-5.89v-37.21a5.889 5.889 0 0 0-5.89-5.888Zm-6.987 12.562h-4.267c-2.913 0-3.48 1.38-3.48 3.416v4.32h6.948l-.902 6.78h-6.06v17.682a20.982 20.982 0 0 1-7.837-.019v-17.663h-5.557v-6.78h5.66v-5.016c0-5.994 4.164-9.269 9.526-9.269 2.579 0 5.338.194 5.97.284Zm-86.089-12.562h-37.21a5.889 5.889 0 0 0-5.889 5.888v37.21a5.889 5.889 0 0 0 5.889 5.89h37.21a5.889 5.889 0 0 0 5.889-5.89v-37.21a5.889 5.889 0 0 0-5.89-5.888Zm-18.605 37.557a13.063 13.063 0 1 1 13.063-13.064 13.063 13.063 0 0 1-13.063 13.064Zm14.696-26.127a3.266 3.266 0 1 1 3.266-3.266 3.266 3.266 0 0 1-3.266 3.266Z" fill="#6c63ff"/><path d="M399.357 202.277a7.258 7.258 0 0 1 7.085 8.583l13.903 9.046-3.437 9.79-19.454-13.051a7.298 7.298 0 0 1 1.903-14.368Z" fill="#ffb6b6"/><path d="m404.309 226.064 9.922-11.456 12.822 5.946 26.201 20.852c3.435.401 29.499 3.765 29.02 13.337a7.75 7.75 0 0 1-2.771 5.858c-4.114 3.396-11.243 2.432-11.51 2.393l-17.057-.854c-.892.215-10.151 2.342-15.052-.702-1.487-.923-31.575-35.374-31.575-35.374Z" fill="#3f3d56"/><path fill="#ffb6b6" d="m432.925 518.689-8.127-.001-3.866-31.347h11.994l-.001 31.348z"/><path d="m434.998 526.567-26.206-.001v-.332a10.2 10.2 0 0 1 10.2-10.2l4.788-3.631 8.93 3.632h2.288Z" fill="#2f2e41"/><path fill="#ffb6b6" d="m522.127 512.328-7.834 2.164-12.073-29.187 11.562-3.193 8.345 30.216z"/><path d="m526.223 519.37-25.26 6.976-.088-.319a10.2 10.2 0 0 1 7.116-12.547l3.647-4.775 9.576 1.122 2.205-.609Zm-92.94-190.391 61.41 3.133.02.056a60.472 60.472 0 0 1 2.487 31.903l1.88 15.665 9.4 48.878 12.532 62.664s16.293 4.386-5.013 11.906-16.919 3.133-13.786-2.507-15.352-69.243-15.352-69.243l-22.56-50.758-21.932 52.638-2.506 58.277s6.58 7.833-12.22 10.966-17.859-2.82-13.472-7.206 8.146-62.664 8.146-62.664l4.387-55.144s-1.254-31.958 6.58-48.564Z" fill="#2f2e41"/><path d="m493.33 257.388-4.937-12.951-15.9-15.66-20.138-1.582-14.8 13.251-4.184 13.182c5.489 25.416 5.376 48.824-2.401 71.502a11.428 11.428 0 0 0 8.833 15.06c22.813 3.834 65.293 9.582 62.367-1.361-3.87-14.476-17.337-45.634-12.348-62.11a77.338 77.338 0 0 0 3.404-17.628Z" fill="#3f3d56"/><circle cx="459.038" cy="204.169" r="17.972" fill="#ffb6b6"/><path d="m454.134 221.197 13.7-.698c1.755-.09 3.67-.245 4.947-1.453a7.496 7.496 0 0 0 1.553-2.58 881.308 881.308 0 0 0 3.768-8.84c1.707-4.088 3.383-8.404 2.948-12.813a8.154 8.154 0 0 0-2.37-5.345 4.527 4.527 0 0 0-5.502-.558 9.303 9.303 0 0 0-4.618-6.704 14.257 14.257 0 0 0-8.132-1.724 19.626 19.626 0 0 0-11.177 4.405 24.26 24.26 0 0 1-2.85 2.26 4.476 4.476 0 0 1-3.48.643 2.518 2.518 0 0 1-1.85-2.745 4.846 4.846 0 0 0-1.239 6.397 4.471 4.471 0 0 1-4.37-.517 5.343 5.343 0 1 0 5.603 9.043c.831 1.165.522 2.747.413 4.174s.275 3.2 1.65 3.594c1.86.534 3.366-1.97 5.3-1.944a2.909 2.909 0 0 1 2.307 1.487 8.586 8.586 0 0 1 .923 2.696l2.476 11.145" fill="#2f2e41"/><path d="M362.37 249.793a35.294 35.294 0 0 1-19.277-5.714l-2.886-1.876 3.421.38c.896.1 1.862.158 2.869.172a23.973 23.973 0 0 0 13.004-3.822 13.538 13.538 0 0 1-9.99-8.99l-.428-1.32 1.362.267a11.371 11.371 0 0 0 1.876.212 13.24 13.24 0 0 1-7.182-11.742v-1.398l1.218.538a11.213 11.213 0 0 0 2.28.97 13.423 13.423 0 0 1-1.609-15.634l.595-1.026.746.921a34.088 34.088 0 0 0 21.79 12.334 1.642 1.642 0 0 0 1.317-.393 1.685 1.685 0 0 0 .58-1.273 13.143 13.143 0 0 1 22.453-9.375 24.235 24.235 0 0 0 7.159-2.812l1.874-1.11-.683 2.069a13.296 13.296 0 0 1-3.105 5.114 24.39 24.39 0 0 0 3.658-1.27l2.54-1.116-1.53 2.314a26.047 26.047 0 0 1-5.99 6.396v1.18c0 17.698-13.462 36.004-35.99 36.004Z" fill="#6c63ff"/><path d="M378.508 237.191a7.258 7.258 0 0 1 7.49 8.233l14.323 8.365-2.96 9.944-20.061-12.098a7.298 7.298 0 0 1 1.208-14.443Z" fill="#ffb6b6"/><path d="m395.372 268.409-10.697-11.576 7.416-11.087 7.992 6.705 8.738 2.091 12.33 4.675c1.717-3.002 15.036-25.657 23.652-21.462a7.75 7.75 0 0 1 4.302 4.848c1.51 5.116-2.173 11.295-2.314 11.525l-7.476 15.355c-.153.905-1.828 10.257-6.55 13.57a5.972 5.972 0 0 1-4.691 1.037c-14.675-2.775-25.016-7.067-30.293-12.527a16.082 16.082 0 0 1-2.409-3.154Z" fill="#3f3d56"/><path d="M205.092 223.654c-1.647-3.541.966-7.495 1.899-11.308 1.74-7.115-3.163-14.817-9.81-17.283-6.646-2.465-14.284-.405-19.993 3.91-5.597 4.228-9.532 6.22-13.387 12.196-1.293 2.003-2.662 8.224-2.906 10.624-.245 2.4.996 5.15 3.26 5.676a2.624 2.624 0 0 0 2.712 3.782c4.332-.837 12.29 1.464 12.29 1.464l22.257 1.274c1.901.109 3.874.208 5.582-.842a3.795 3.795 0 0 0 1.817-2.6c.434-2.811-2.586-4.45-3.721-6.893Z" fill="#2f2e41"/><path d="m210.694 254.643-1.623 10.806-2.575 17.12-.436 6.344-3.204 46.493-8.824 6.787a26.233 26.233 0 0 1-34.853-2.557l-10.716-5.159c5.743-5.65 4.675-31.833 4.675-31.833l-.064-51.427 14.525-4.884 4.784-9.419h17.164l4.29 10.012 7.789 3.562 3.547 1.63Z" fill="#e6e6e6"/><circle cx="181.674" cy="217.572" r="14.512" fill="#9e616a"/><path d="M173.383 213.02a18.571 18.571 0 0 1-10.713-3.38l-.104-.073a14.116 14.116 0 0 1 14.115-14.116h5.762a14.004 14.004 0 0 1 13.988 14.05 3.226 3.226 0 0 1-3.185 3.18l-19.532.336c-.11.002-.221.003-.331.003Z" fill="#2f2e41"/><path d="m215.862 284.477-13.145.108-.966 23.397-10.68 13.076a7.148 7.148 0 1 0 8.254 8.112l14.713-20.397Zm-69.312.7-13.474-6.3-14.715 18.217-16.368 4.14a7.148 7.148 0 1 0 1.798 11.433l23.968-7.617Z" fill="#9e616a"/><path d="m188.935 230.964 5.024-6.268a3.627 3.627 0 0 0 1.009-2.021c.026-.767-.696-1.587-1.424-1.347-.676.223-4.57-9.533-5.281-9.531-.738.002-.979-.981-.988-1.719-.035-2.794 2.236.207 2.987-2.485s3.678-.378 6.201-1.58 5.951-.656 7.51 1.663c1.157 1.72 1.114 3.953.96 6.02a94.532 94.532 0 0 1-2.158 14.242c-.265 1.15-.66 2.437-1.72 2.957a4.1 4.1 0 0 1-1.84.275l-7.736-.038" fill="#2f2e41"/><circle cx="200.989" cy="196.865" r="7.152" fill="#2f2e41"/><path d="M217.073 284.25c-.772 1.345-2.417 1.881-3.919 2.296-2.03.565-2.624 1.137-4.655 1.702a94.28 94.28 0 0 1-2.44.665 34.5 34.5 0 0 1-4.068.837c-1.152.165-2.51.165-3.262-.73a3.758 3.758 0 0 1-.565-2.595q.44-16.478.887-32.955l.622.215a8.096 8.096 0 0 1 .873-.5 9.794 9.794 0 0 1 4.627-1.066 9.406 9.406 0 0 1 2.71.421 9.845 9.845 0 0 1 6.108 5.593 17.197 17.197 0 0 1 1.001 6.215c.007.322.007.643.014.965.043 2.746-1.351 5.493-1.308 8.239a6.455 6.455 0 0 0 .314 2.281c.286.73.844 1.337 1.059 2.096.214.75-.136 1.78-.916 1.838a3.001 3.001 0 0 1 2.918 4.484Zm-63.939-32.97a9.734 9.734 0 0 1 8.85 12.109 19.547 19.547 0 0 1-3.464 6.368l-4.807 6.69a6.405 6.405 0 0 0-1.107 2.016c-.202.758-.122 1.58-.4 2.315s-1.168 1.35-1.83.93a3.004 3.004 0 0 1-.324 5.342c-1.426.622-3.064.067-4.518-.49l-5.903-2.258a48.965 48.965 0 0 1-6.122-2.669c-1.022-.56-2.113-1.368-2.185-2.532-.057-.905.709-1.6 1.093-2.423 4.807-10.292 11.876-18.482 20.657-25.46Z" fill="#e6e6e6"/><path d="M160.04 313.236c0-5.755-4.242-10.392-9.547-10.392-7.105-.34-14.333-.463-21.725-.463h-2.305c-7.378 0-14.633.122-21.725.463-5.223 0-9.465 4.65-9.465 10.42-.327 4.568-.464 9.123-.45 13.638s.123 9.123.437 13.638c0 5.768 4.24 10.446 9.464 10.446 7.447.341 15.097.491 22.871.491s15.411-.136 22.885-.49c5.236 0 9.546-4.679 9.546-10.447.3-4.569.45-9.124.436-13.707-.013-4.582-.122-9.11-.422-13.637Zm-38.637 26.28v-25.175l18.575 12.574Z" fill="#6c63ff"/><path d="m643.94 529.23-642.75.307a1.19 1.19 0 0 1 0-2.382l642.75-.307a1.19 1.19 0 0 1 0 2.381Z" fill="#cacaca"/></svg>
        </figure>
        <div className='card-body dark:text-white '>
            <p className="text-left">Email: {email}</p>
          <h2 className='card-title'>
            Title : {jobTitle}
          </h2>
          <p className="text-left font-semibold"> <span className="">Category:</span>  {category}</p>
          <p className="text-left "> <span className="font-semibold">Price Range:</span> {minimumPrice}$ - {maximumPrice}$ </p>
          <p className="text-left"><span className="font-semibold">Desctiption :</span> {jobDescription}</p>
          <p className="text-left"><span className="font-semibold">Dead Line :</span> {deadLine}</p>
          <div className=''>
        
          </div>   
        </div>
      </div>
      <div className="flex-1 w-[90%] mx-auto" >
        <h3 className="text-4xl text-center font-semibold">MAKE YOUR BIDS</h3>
      <form  onSubmit={handleBidData} className='border-gray-500 dark:border-white border  p-5 mb-20 my-10'>
      <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
           My biddding Ammount
          </label>
          <input
          type="number"
          defaultValue={minimumPrice}
           
            name="bidPrice"
           
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
           
            
          />
        </div>
      <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
           Dead Line
          </label>
          <input
           defaultValue={deadLine}
            type="date"
             name="bidDeadLine"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='john.doe@company.com'
            
          />
        </div>
      <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
           Buyer Email 
          </label>
          <input
           defaultValue={email}
            readOnly
            type="email"
        
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='john.doe@company.com'
            
          />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            My Email
          </label>
          <input
            type='email'
            readOnly
            defaultValue={user?.email}
            name="bidEmail"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='john.doe@company.com'
            required
          />
        </div>
        <div className="mx-auto text-center">
        <button 
           
           className='group  rounded bg-gradient-to-t from-green-200 via-cyan-200 to-blue-300 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75'
           href='/download'>
           <span className='block dark:hover:text-black rounded-sm dark:bg-slate-600 bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent'>
             BID JOB
           </span>
         </button>
         </div>
        </form>
       </div>
        </div>
    );
};

export default BidDetails;