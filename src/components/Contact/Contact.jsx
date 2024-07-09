import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <h1>Contact</h1>
        </div>
        <div className="flex-1">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 max-w-screen-lg">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Name
                </Typography>
                <Input size="lg" className="text-white !py-6 !text-xl" color="cyan" label="type your name" />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input className="!border !border-red-300"  label="type your email" />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6" fullWidth>
                sign up
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <a href="#" className="font-medium text-gray-900">
                  Sign In
                </a>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
