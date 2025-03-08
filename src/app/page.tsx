import ProgressBar from '../components/ProgressBar/progressBar';


export default function Home() {

  let userName: string = "Srnath";

  return (
    <div>
      Header

      <div>
        <ProgressBar name={userName} />
      </div>
    </div>
  );
}
