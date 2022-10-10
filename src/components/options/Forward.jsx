import BackArrow from '../image/arrow-circle-right.svg'


export default function Back({func}) {

  return (
   <div   onClick={func}>
<img src={BackArrow} alt="Back" />
      </div>
  )
}
