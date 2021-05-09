// package com.st_mobile;

// import com.facebook.react.ReactActivity;

// public class MainActivity extends ReactActivity {


//   @Override
//   protected String getMainComponentName() {
//     return "st_mobile";
//   }
// }

package com.st_mobile;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "st_mobile";
  }

  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
}
