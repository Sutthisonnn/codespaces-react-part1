import './Hello.css'
export default function Hello({firstname,lastname,age}){
    return (<><h1>Hello World {firstname}{lastname}{age}</h1>
            <hr/>
            </>
    );
}