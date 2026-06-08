
import data from "../data/albo.json";
export default function Home(){
 return <main className="p-10">
 <h1>Portonaccio League</h1>
 <p>Museo digitale della lega.</p>
 <p>Trofei registrati: {data.length}</p>
 </main>
}
