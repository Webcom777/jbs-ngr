import { sendEmail } from "@/app/api/utils/send-email";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      roomId,
      roomName,
      roomPrice,
      firstName,
      lastName,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      specialRequests,
      nights,
      totalPrice,
    } = body;

    // Validate required fields
    if (
      !roomName ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !checkIn ||
      !checkOut
    ) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Format dates for display
    const checkInDate = new Date(checkIn).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const checkOutDate = new Date(checkOut).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Admin email content
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9fafb; padding: 20px; }
            .booking-details { background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
            .detail-label { font-weight: bold; color: #4b5563; }
            .detail-value { color: #1f2937; }
            .total { background-color: #dbeafe; padding: 15px; border-radius: 8px; margin-top: 20px; }
            .total-amount { font-size: 24px; font-weight: bold; color: #2563eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Booking Request</h1>
              <p>JBS Residence</p>
            </div>
            
            <div class="content">
              <h2>Booking Details</h2>
              
              <div class="booking-details">
                <h3 style="color: #1e3a8a; margin-top: 0;">Room Information</h3>
                <div class="detail-row">
                  <span class="detail-label">Room Type:</span>
                  <span class="detail-value">${roomName}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Room ID:</span>
                  <span class="detail-value">${roomId}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Price per Night:</span>
                  <span class="detail-value">₦${parseInt(roomPrice).toLocaleString()}</span>
                </div>
                
                <h3 style="color: #1e3a8a; margin-top: 20px;">Guest Information</h3>
                <div class="detail-row">
                  <span class="detail-label">Guest Name:</span>
                  <span class="detail-value">${firstName} ${lastName}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Email:</span>
                  <span class="detail-value">${email}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Phone:</span>
                  <span class="detail-value">${phone}</span>
                </div>
                
                <h3 style="color: #1e3a8a; margin-top: 20px;">Stay Details</h3>
                <div class="detail-row">
                  <span class="detail-label">Check-in:</span>
                  <span class="detail-value">${checkInDate}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Check-out:</span>
                  <span class="detail-value">${checkOutDate}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Number of Nights:</span>
                  <span class="detail-value">${nights}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Number of Guests:</span>
                  <span class="detail-value">${guests}</span>
                </div>
                
                ${
                  specialRequests
                    ? `
                  <h3 style="color: #1e3a8a; margin-top: 20px;">Special Requests</h3>
                  <p style="padding: 10px; background-color: #f9fafb; border-radius: 4px;">${specialRequests}</p>
                `
                    : ""
                }
                
                <div class="total">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 18px; font-weight: bold;">Total Amount:</span>
                    <span class="total-amount">₦${totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
                Please contact the guest to confirm the booking and discuss payment arrangements.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Customer confirmation email
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9fafb; padding: 20px; }
            .booking-details { background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
            .detail-label { font-weight: bold; color: #4b5563; }
            .detail-value { color: #1f2937; }
            .total { background-color: #dbeafe; padding: 15px; border-radius: 8px; margin-top: 20px; }
            .total-amount { font-size: 24px; font-weight: bold; color: #2563eb; }
            .highlight-box { background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Booking Request Received</h1>
              <p>Thank you for choosing JBS Residence</p>
            </div>
            
            <div class="content">
              <p>Dear ${firstName} ${lastName},</p>
              
              <p>Thank you for your booking request at JBS Residence. We have received your request and our team will review it shortly.</p>
              
              <div class="highlight-box">
                <strong>⏰ What's Next?</strong><br>
                Our reservations team will contact you within 24 hours to confirm your booking and provide payment details.
              </div>
              
              <h2>Your Booking Summary</h2>
              
              <div class="booking-details">
                <div class="detail-row">
                  <span class="detail-label">Room Type:</span>
                  <span class="detail-value">${roomName}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Check-in:</span>
                  <span class="detail-value">${checkInDate}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Check-out:</span>
                  <span class="detail-value">${checkOutDate}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Number of Nights:</span>
                  <span class="detail-value">${nights}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Number of Guests:</span>
                  <span class="detail-value">${guests}</span>
                </div>
                
                <div class="total">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 18px; font-weight: bold;">Estimated Total:</span>
                    <span class="total-amount">₦${totalPrice.toLocaleString()}</span>
                  </div>
                  <p style="font-size: 12px; color: #6b7280; margin-top: 10px; margin-bottom: 0;">
                    ₦${parseInt(roomPrice).toLocaleString()} × ${nights} night${nights > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              
              <h3>Contact Information</h3>
              <p>
                <strong>Phone:</strong> +234 800 123 4567<br>
                <strong>Email:</strong> reservations@jbs-ngr.org<br>
                <strong>Address:</strong> Jos Business School, Jos, Plateau State
              </p>
              
              <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
                If you have any questions or need to modify your booking, please don't hesitate to contact us.
              </p>
              
              <p style="margin-top: 30px;">
                Best regards,<br>
                <strong>JBS Residence Team</strong>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to admin
    try {
      await sendEmail({
        to: process.env.ADMIN_EMAIL || "admin@jbs-ngr.org",
        from: process.env.FROM_EMAIL || "onboarding@resend.dev",
        subject: `New Booking Request - ${roomName} - ${firstName} ${lastName}`,
        html: adminEmailHtml,
        text: `New booking request received for ${roomName} from ${firstName} ${lastName} (${email}). Check-in: ${checkInDate}, Check-out: ${checkOutDate}, Total: ₦${totalPrice.toLocaleString()}`,
      });
    } catch (error) {
      console.error("Failed to send admin email:", error);
      // Continue even if admin email fails
    }

    // Send confirmation email to customer
    try {
      await sendEmail({
        to: email,
        from: process.env.FROM_EMAIL || "onboarding@resend.dev",
        subject: "Booking Request Confirmation - JBS Residence",
        html: customerEmailHtml,
        text: `Dear ${firstName} ${lastName}, Thank you for your booking request at JBS Residence. We have received your request for ${roomName} from ${checkInDate} to ${checkOutDate}. Our team will contact you shortly to confirm your reservation. Total: ₦${totalPrice.toLocaleString()}`,
      });
    } catch (error) {
      console.error("Failed to send customer email:", error);
      return Response.json(
        {
          error:
            "Booking received but failed to send confirmation email. Please make sure you have set up your Resend API key and verified your domain.",
        },
        { status: 500 },
      );
    }

    return Response.json({
      success: true,
      message: "Booking request submitted successfully",
    });
  } catch (error) {
    console.error("Booking error:", error);
    return Response.json(
      { error: error.message || "Failed to process booking" },
      { status: 500 },
    );
  }
}
