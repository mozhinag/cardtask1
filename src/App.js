
import './App.css';
import Card from './Card';

function App() {

  const plan = [
    {
    planName: "FREE",
    price: "0",
    users: "Single User",
    storage: "50GB Storage",
    public: "Unlimited Public Projects",
    access: "Community Access",
    private: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    report: "Monthly Status Reports"

  },
  {
    planName: "PLUS",
    price: "9",
    users: "5 Users",
    storage: "50GB Storage",
    public: "Unlimited Public Projects",
    access: "Community Access",
    private: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    report: "Monthly Status Reports"


  },
  {
    planName: "PRO",
    price: "49",
    users: "Unlimited Users",
    storage: "50GB Storage",
    public: "Unlimited Public Projects",
    access: "Community Access",
    private: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    subdomain: "Free Subdomain",
    report: "Monthly Status Reports"
  }

  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          
            <h1 className="text-center"> PRICE CARD</h1>
          
         
         { plan.map((detail) => {
              return <Card details={detail}></Card>;
            })}
         
        </div>
      </div>
    </section>
  );
}

export default App;
