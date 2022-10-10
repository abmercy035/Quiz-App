export default function Course({Value, Disabled, Id})
 {
  return (
   <option disabled={Disabled} key={Id} value={Value}> {Value}</option>

  )
}