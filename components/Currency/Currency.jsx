import { useEffect, useRef, useState } from "react";

import { useFetch } from "@hooks/useFetch";

export function Currency() {
  const [usdRate, setUsdRate] = useState(0);
  const [eurRate, setEurRate] = useState(0);
  const API_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

  const { data, isLoading, error, refetch } = useFetch(API_URL);

  useEffect(() => {
    if (data) {
      setUsdRate(data[25].rate.toFixed(2));
      setEurRate(data[32].rate.toFixed(2));
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) console.log(error);

  return (
    <div className="currency">
      <div className="currency__row">
        <div className="currency__icon">&#36;</div>
        <p>
          <span>{usdRate}</span> гривен за доллар
        </p>
      </div>
      <div className="currency__row">
        <div className="currency__icon">&#8364;</div>
        <p>
          <span>{eurRate}</span> гривен за евро
        </p>
      </div>
    </div>
  );
}
