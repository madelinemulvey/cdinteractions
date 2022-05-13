
function setup() {
  createCanvas(windowWidth, windowHeight);

}






}
  }
}
package org.kodejava.swing;

import javax.swing.JFrame;
import javax.swing.SwingUtilities;
import javax.swing.WindowConstants;
import java.awt.Cursor;

public class ChangeCursor extends JFrame {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            ChangeCursor frame = new ChangeCursor();
            frame.setTitle("Change Cursor");
            frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
            frame.setSize(500, 500);

            // Here we create a hand shaped cursor!
            Cursor cursor = new Cursor(Cursor.HAND_CURSOR);
            frame.setCursor(cursor);
            frame.setVisible(true);
        });
    }
}





console.log("hello world")
