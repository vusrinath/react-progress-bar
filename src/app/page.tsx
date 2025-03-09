'use client'
import ProgressBar from '../components/ProgressBar/progressBar';


export default function Home() {

  let list = [20, 60, 80];


  return (
    <div>
      {list.map(it => {
        return (
          <div style={{ marginTop: 30 }}>
            <ProgressBar key={it} pg={it} />
          </div>
        )
      })}
    </div>
  )

}
