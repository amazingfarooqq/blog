



    
function getdata(){

    fetch('http://127.0.0.1:8000/api/show')
    .then( (data) => data.json())
    .then( (d) =>  {
        let msg = document.getElementById('messages')
        let onlineusers = document.getElementById('onlineusers')
            d.forEach(element => {
                msg.innerHTML += `
                <div style="background-color: rgb(250, 250, 250); " class="row my-2 py-2 px-3">
                <div class="col-1 p-0">
                    <img class="bg-danger rounded-circle px-1 py-1" style="width: 50px;" src="imgs/bhter1.jpg" alt="">
                    
                    </div>
                <div class="col">
                    <div class="row">
                        <div class="col-12 fw-bold">${ element.nick_name }</div>
                        <div class="row">
                            <div class="col">${ element.message }</div>
                            <div class="col-1">data</div>
                        </div>
                    </div>
                </div>
                </div> 
                `
                onlineusers.innerHTML += `
                <div class="row py-3 online_user border-bottom border-secondary">
                <div class="col-3" style="width: 60px;">
                <img class="" style="width: 50px;" src="imgs/user.png" alt="">
                     
                </div>
                  <div class="col">
                      <div class="row" style="white-space: nowrap;overflow: hidden;">
                          <div class="col-12 fw-bold text-danger">${ element.nick_name }</div>
                          <div class="col-9">AsdM A LEGEND</div>
                          <div class="col text-end px-3"><i class="far fa-envelope"></i></div>
                  </div>
                </div>
                </div>
                `

            })
        })

        }


getdata()



