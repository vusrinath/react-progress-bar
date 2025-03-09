'use client'
import ProgressBar from '../components/ProgressBar/progressBar';
import FloderExp from '../components/FolderExplorer/FolderExp';


let Progress = () => {
  let list = [60, 80];
  return list.map(it => {
    return (
      <div style={{ marginTop: 30 }} >
        <ProgressBar key={it} pg={it} />
      </div>
    )
  })
}

export default function Home() {

  return (
    <div>
      <Progress />
      <FloderExp />
    </div>
  )

}
