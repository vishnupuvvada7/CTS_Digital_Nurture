package mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

import mockito.ExternalAPI;
import mockito.MyService;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        //creating mock object
        ExternalAPI mockApi = mock(ExternalAPI.class);

        when(mockApi.getData()).thenReturn("Mock Data");

        //Injecting mock into service
        MyService service = new MyService(mockApi);

        // Testing
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
    
    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock
        ExternalAPI mockApi = mock(ExternalAPI.class);

        // Step 2: Inject mock
        MyService service = new MyService(mockApi);

        // Step 3: Call method
        service.fetchData();

        // Step 4: Verify interaction
        verify(mockApi).getData();
    }
}
