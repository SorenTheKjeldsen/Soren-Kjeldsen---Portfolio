import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for sending emails
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Validate inputs
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Navn, email og besked er påkrævet" });
      }

      // We'll use Resend to send the email if the API key is available
      const resendApiKey = process.env.RESEND_API_KEY;
      
      if (!resendApiKey) {
        console.warn("RESEND_API_KEY er ikke sat. Simulerer afsendelse af email i udviklingsmiljø.");
        console.log("Simuleret email:", { name, email, subject, message });
        
        // Return a success response even if we're just simulating
        return res.status(200).json({ 
          success: true, 
          message: "Besked modtaget (Simuleret afsendelse, mangler API nøgle)" 
        });
      }

      const resend = new Resend(resendApiKey);

      const { data, error } = await resend.emails.send({
        from: "Kontaktformular <onboarding@resend.dev>", // Typically you need to verify a domain in Resend
        to: ["soren.kjeldsen@hotmail.com"], // Contact email
        subject: subject || "Ny besked fra din hjemmeside",
        html: `
          <h3>Ny besked fra kontaktformularen på hjemmesiden</h3>
          <p><strong>Navn:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Emne:</strong> ${subject || "Ikke angivet"}</p>
          <br/>
          <p><strong>Besked:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      });

      if (error) {
        console.error("Fejl ved afsendelse af email:", error);
        return res.status(500).json({ error: "Der skete en fejl ved afsendelse af e-mailen." });
      }

      return res.status(200).json({ success: true, data });
    } catch (error) {
      console.error("Uventet fejl:", error);
      return res.status(500).json({ error: "Der skete en uventet fejl." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
