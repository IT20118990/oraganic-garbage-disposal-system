const router =  require("express").Router();
const Customer = require("../models/Customer");
const bcrypt= require("bcrypt");
  
router.route('/').get((req, res) => {
    Customer.find()
        .then(Customer => res.json(Customer))
        .catch(Customer => res.status(500).json('Error:'+ err));
});


// Add Customer
    router.post("/add", async (req, res) => {
        console.log("new Customer")
        const newCustomerR = new Customer(req.body);
            // console.log('Customer ', newCustomerR);
            try {
              const savedCustomer = await newCustomerR.save();
            //   console.log('savedCustomer',savedCustomer)
              res.status(200).json(savedCustomer);
            } catch (err) {
              res.status(500).json(err);
            }
      
      });
      
// To get data from data base
router.route('/:id').get((req, res) => {
     console.log('get Customer_id ',  req.params.id);
    Customer.findOne({ServiceID: req.params.id})
        .then(Customer => {
            // console.log(Customer);
            res.json(Customer)
        }
        )
        .catch(err =>{
            console.log('err ', err);
            res.status(500).json('Error: ' + err)});
});

// Update by ServiceID
router.put("/update/:id",async (req,res) => {
    console.log("update Customer")
    let userId = req.params.id;
    const {
        ServiceID,
        name,
        grade,
        subject,
        date,
        timeStart,
        timeEnd,
        notice} = req.body;

    const updateCustomer = {
        ServiceID,
        name,
        grade,
        subject,
        date,
        timeStart,
        timeEnd,
        notice
    }
    const update = await Customer.updateOne({
        ServiceID: userId,
    }, updateCustomer).then(() => {
        res.status(200).send({status: "Customer updated"})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with update data ", error: err.message});
    })   
})

//Update Mark to Customer Collection

router.route("/update/mark/:id").put(async (req,res) => {
    console.log('ud', req.params.id);
    let userId = req.params.id;
    const {
        ServiceID,
        name,
        grade,
        subject,
        date,
        timeStart,
        timeEnd,
        notice,
        } = req.body;
    console.log('body ', req.body);
    const mark = req.body.mark;
    // const mark = [markArr]

    // Update Customer
    const updateCustomer = {
        ServiceID,
        name,
        grade,
        subject,
        date,
        timeStart,
        timeEnd,
        notice,
        mark
    }

    console.log('up ', updateCustomer.mark)
    const update = await Customer.updateOne({
        ServiceID: userId,
    }, updateCustomer).then(() => {
        res.status(200).send({status: "Customer updated"})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with update data ", error: err.message});
    })   
})
// End of updatong Mark function

// delet by ServiceID
router.delete("/delete/"), async(req, res) => {
    console.log("delect Customer")
 
    try {
      const deletedCustomer = await Customer.findOneAndDelete({'ServiceID':req.params.ServiceID});
      try {
        await deletedCustomer.delete();
        res.status(200).json("Customer has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(500).json(err);
    }

  };

// router.route("/delete/:id").delete(async (req, res) => {
//     let userId = req.params.id;

//     await Customer.deleteOne({
//         ServiceID: userId,
//     }).then(() => {
//         res.status(200).send({status: " User deleted "});
//     }).catch((err) => {
//         res.status(500).send({ status: " Error with deleted  user", error: err.massage});
//     })
// })

router.route("/get/:id").get(async (req, res) => {
    console.log("get Customer")
    let userId = req.params.id;
    const user = await Customer.findOne({
        ServiceID: userId,
    }).then((Customer) => {
        res.status(200).send({status: "User fetched ", Customer})
    }).catch((err) => {
        console.log(err.massage);
        res.status(500).send({status: " error with get User ", error: err});
    })

})

module.exports = router;

