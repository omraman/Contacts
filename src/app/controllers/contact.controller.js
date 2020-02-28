const hubspot = require('../../../config/config')

/**
 * Get All contacts from hubspot
 *  url: http://localhost:1010/contacts/all
 *  Header { Bearer token, content-Type: application/json }
 */
const getContact = async(req, res) => {
    await hubspot.contacts.get().then((result) => {
        return res.send({ message: 'Contacts fetched successfully', result })
    }).catch((err) => {
        res.send({ message: 'error in getting contacts', err })
    }) 
}

/**
 *  add new contact to hubspot
 *  url: http://localhost:1010/contacts/add-new
 *  Header { Bearer token, content-Type: application/json }
 */
const appContact = async(req, res) => {
    const contactInfo = {
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        website: req.body.website,
        company: req.body.company,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        gender: req.body.gender
    } 

    const data = 
    {
        properties:
            [
                { property: 'email', value: contactInfo.email },
                { property: 'firstname', value: contactInfo.firstname },
                { property: 'lastname', value: contactInfo.lastname },
                { property: 'website', value: contactInfo.website },
                { property: 'company', value: contactInfo.company },
                { property: 'phone', value: contactInfo.phone },
                { property: 'address', value: contactInfo.address },
                { property: 'city', value: contactInfo.city },
                { property: 'state', value: contactInfo.state },
                { property: 'zip', value: contactInfo.zip },
                { property: 'gender', value: contactInfo.gender }
            ]
    }

    await hubspot.contacts.create(data).then((result) => {
        res.send({ message: 'Contacts added successfully', result });
    }).catch((err) => {
        console.log(err)
        res.send({ message: 'Error', err })
    })
} 

const getByEmail = async(req, res) => {
    const email = req.params.email
    await hubspot.contacts.getByEmail(email).then((result) => {
        console.log('sjjbjsjkbkj')
        res.send(result)
    }).catch((err) => {
        res.send({ message: 'email not found', err})
    })
}


module.exports = {
    getContact,
    appContact,
    getByEmail
}