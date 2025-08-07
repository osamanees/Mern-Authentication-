import jwt from 'jsonwebtoken';

const userAuth = async (req , res, next) => {
  const {token} = req.cookies;
  if(!token){
    return res.json({success: false, message: 'Not Authorized. Login Again'})
  }
  try{
  const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
  if(tokenDecode.id){
    req.body.userId = tokenDecode.id
  }else{
   return res.json({success: false, message:'Not Authorized. Login Again'});
  }
  next();
  }catch(error){
  res.json({success: false, message: error.message})
  }

const otp =  String(Math.floor(100000 + Math.random() * 900000));
    user.VerifyOtp = otp;
    user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000;
    await user.save();

    const mailOption = {
        from : process.env.SENDER_EMAIL,
        to: user.email,
        Subject: 'Account VERIFICATION OTP',
        text :  `Your OTP is ${otp}. Verify your account this using OTP.`
      }
      await transporter.sendMail(mailOption);
    }
      
export default userAuth;