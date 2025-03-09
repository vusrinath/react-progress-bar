'use client'
import ProgressBar from '../components/ProgressBar/progressBar';
import FloderExp from '../components/FolderExplorer/FolderExp';


export default function Home() {

  let list = [60, 80];

  let prg = list.map(it => {
    return (
      <div style={{ marginTop: 30 }} >
        <ProgressBar key={it} pg={it} />
      </div>
    )
  })

  return (
    <div>
      <FloderExp />
    </div>
  )

}
