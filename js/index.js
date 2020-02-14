function billingFunction()
{
  if(document.getElementById('same').checked)
     {
        var name = document.getElementById('shippingName').value;
        var zipcode = document.getElementById('shippingZip').value;

        document.getElementById('billingName').value = name;         
        document.getElementById('billingZip').value = zipcode;
     }
  else
    {
        document.getElementById('billingName').value = "";
        document.getElementById('billingZip').value = "";
    }
}