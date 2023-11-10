import Header from './components/Header'
import Search from './components/Search'
import Slogan from './components/Slogan'
import Summary from './components/Summary'

export default function Home() {
  return (
    <>
      <div className="h-screen bg-basebackground">
        <div className="m-auto max-w-6xl">
          <Header />
        </div>
        <div className="m-auto -mt-9 max-w-4xl bg-baseprofile">
          <Slogan />
        </div>
        <div className="m-auto max-w-4xl">
          <Search />
        </div>
        <div className="m-auto mt-12 grid max-w-4xl grid-cols-2 gap-8">
          <Summary />
          <Summary />
          <Summary />
          <Summary />
          <Summary />
        </div>
      </div>
    </>
  )
}
