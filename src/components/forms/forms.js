function Forms(){
    return(
        <div>
            <form>
             <label for="fname">First name:</label>
             <input type="text" id="fname" name="fname" value="John"></input>
             <label for="lname">Last name:</label>
             <input type="text" id="lname" name="lname" value="doe"></input>
             <input type="submit" value="Submit"></input>

            </form>
        </div>
        
    )
}
export default Forms