
export default function Level({Value, Disabled, setLevel}) {
 
  return (
   <option disabled={Disabled} onClick={()=> setLevel(Value)} value={Value}> {Value} Level</option>
  )
}
